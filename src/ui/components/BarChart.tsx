import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { global, color } from '@helper/tokens'
import { Chart as ChartJS, ChartOptions, Plugin, registerables } from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { Loader } from '@component/Loader'

const legendMargin: Plugin = {
	id: 'legendMargin',
	afterInit(chart, plugins) {
		if ( chart.legend ) {
			const originalFit = chart.legend.fit
			const margin = plugins.margin || 0

			// Override the fit method
			chart.legend.fit = function fit() {
				if ( originalFit ) originalFit.call( this )
				return this.height += margin
			}
		}
	}
}

ChartJS.register( ...registerables, legendMargin )

const Container = styled.div`
	width: 100%;
	height: 100%;
	max-height: 220px;
	display: flex;
	justify-content: center;

	@media screen and (min-width: ${global.breakpoint}px) {
		max-height: 260px;
	}

	canvas {
		width: 100%;
	}
`

const getWeekLabels = () => {
	const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

	// Dynamically return current timezone
	const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone

	// Adjust the date to current timezone
	const todayIndex = new Date().toLocaleString( 'en-US', { weekday: 'short', timeZone: timezone })

	// Find the index of today based on locale string
	// (0 for Sunday, 6 for Saturday)
	const index = days.findIndex( day => todayIndex === day )

	// Reorganize the days array starting from today's index
	const weekLabels = [
		...days.slice( index + 1 ),
		...days.slice( 0, index + 1 )
	]

	return weekLabels
}

interface BarChartProps {
	datasets: {
		label: string
		data: number[]
		backgroundColor: string
	}[]
}

export const BarChart: React.FC<BarChartProps> = ({ datasets }) => {
	const [isLoading, setIsLoading] = useState<boolean>( true )
	const [barWidth, setBarWidth] = useState<number>( 7 )

	useEffect( () => {
		// Get the small screen breakpoint from CSS
		const style = window.getComputedStyle( document.documentElement )
		const breakpoint = parseInt( style.getPropertyValue( '--breakpoint' ).replace( 'px', '' ) )

		let resizeTimeout: NodeJS.Timeout

		// Update bars width on window resize
		const handleResize = () => {
			setIsLoading( true )
			if ( window.innerWidth > breakpoint ) {
				setBarWidth( 15 )
			} else {
				setBarWidth( 7 )
			}

			// Debounce: Reset `isLoading` after resize stops
			clearTimeout( resizeTimeout )

			resizeTimeout = setTimeout( () => setIsLoading( false ), 300 )
		}
		window.addEventListener( 'resize', handleResize )

		// Initial call to set bar width
		handleResize()

		// Cleanup on unmount
		return () => {
			window.removeEventListener( 'resize', handleResize )
			clearTimeout( resizeTimeout )
		}
	}, [])

	const options: ChartOptions<'bar'> & { plugins: { legendMargin?: { margin: number } } } = {
		responsive: true,
		maintainAspectRatio: false,
		scales: {
			x: {
				border: {
					display: false
				},
				grid: {
					display: false
				},
				ticks: {
					color: color.secondary.dark,
					font: {
						size: 13
					},
					align: 'center' as const
				}
			},
			y: {
				beginAtZero: true,
				grid: {
					color: '#F3F3F5'
				},
				ticks: {
					color: color.secondary.dark,
					font: {
						size: 13
					},
					align: 'center' as const
				}
			}
		},
		plugins: {
			legend: {
				align: 'end',
				labels: {
					usePointStyle: true,
					pointStyle: 'circle',
				}
			},
			legendMargin: {
				margin: 30
			},
			datalabels: false as unknown as Record<string, unknown>
		},
	}

	const setDatasets = datasets.map( ( dataset ) => ({
		...dataset,
		borderWidth: 0,
		borderColor: 'rgba(0,0,0,0)',
		borderRadius: 30,
		borderSkipped: false,
		maxBarThickness: barWidth,
	}) )

	const data = {
		labels: getWeekLabels(),
		datasets: setDatasets,
	}

	return isLoading
		? <Loader title="Loading" />
		: (
			<Container>
				<Bar options={ options } data={ data } />
			</Container>
		)
}
