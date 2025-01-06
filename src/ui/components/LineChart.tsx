import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { global, color } from '@helper/tokens'
import { Chart as ChartJS, ScriptableContext, registerables } from 'chart.js'
import { Line } from 'react-chartjs-2'
import { Loader } from '@component/Loader'

ChartJS.register( ...registerables )

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

export const LineChart: React.FC = () => {
	const [isLoading, setIsLoading] = useState<boolean>( false )

	const getMonths = () => {
		const months = [
			'Jan', 'Feb', 'Mar',
			'Apr', 'May', 'Jun',
			'Jul', 'Aug', 'Sep',
			'Oct', 'Nov', 'Dec'
		]

		const currentDate = new Date()
		const currentMonthIndex = currentDate.getMonth()
		const lastMonths = []

		for ( let i = 0; i < 7; i++ ) {
			const monthIndex = ( currentMonthIndex - i + 12 ) % 12
			lastMonths.unshift( months[monthIndex] )
		}

		return lastMonths
	}

	useEffect( () => {
		let resizeTimeout: NodeJS.Timeout

		// Update pie width on window resize
		const handleResize = () => {
			setIsLoading( true )

			// Debounce: Reset `isLoading` after resize stops
			clearTimeout( resizeTimeout )

			resizeTimeout = setTimeout( () => setIsLoading( false ), 300 )
		}
		window.addEventListener( 'resize', handleResize )

		// Initial call to set pie width
		handleResize()

		// Cleanup on unmount
		return () => {
			window.removeEventListener( 'resize', handleResize )
			clearTimeout( resizeTimeout )
		}
	}, []);

	const options = {
		responsive: true,
		maintainAspectRatio: false,
		scales: {
			x: {
				border: {
					dash: [5, 5]
				},
				grid: {
					color: '#DFE5EE'
				},
				ticks: {
					color: color.secondary.dark,
					font: {
						size: 13
					},
					align: 'start' as const
				}
			},
			y: {
				beginAtZero: true,
				border: {
					dash: [5, 5]
				},
				grid: {
					color: '#DFE5EE'
				},
				ticks: {
					color: color.secondary.dark,
					font: {
						size: 14
					},
					align: 'center' as const
				}
			}
		},
		plugins: {
			legend: {
				display: false
			},
			datalabels: false as unknown as Record<string, unknown>
		}
	}

	const data = {
		labels: getMonths(),
		datasets: [{
			data: [9203, 1029, 3858, 10923, 8293, 4893, 2093, 9802, 4903, 6402, 9784, 9892],
			borderColor: '#1814F3',
			backgroundColor: ( context: ScriptableContext<'line'> ) => {
				const colors = [
					'rgba(45, 96, 255, 0.5)',
					'rgba(45, 96, 255, 0)'
				]

				if ( ! context.chart.chartArea ) {
					return
				}

				const { ctx, chartArea: { top, bottom } } = context.chart
				const gradient = ctx.createLinearGradient(0, top, 0, bottom)
				gradient.addColorStop(0, colors[0])
				gradient.addColorStop(1, colors[1])

				return gradient
			},
			fill: true,
			tension: 0.3,
			radius: 0
		}]
	}

	return isLoading
		? <Loader title="Preparing your data" />
		: (
			<Container>
				<Line options={ options } data={ data } />
			</Container>
		)
}
