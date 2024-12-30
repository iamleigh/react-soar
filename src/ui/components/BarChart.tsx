import React, { useState, useEffect } from 'react'
import { Chart as ChartJS, ChartOptions, Plugin, registerables } from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { color } from '../../utils/tokens'

const legendMargin: Plugin = {
	id: 'legendMargin',
	afterInit(chart, args, plugins) {
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
	const weekLabels = [ ...days.slice( index ), ...days.slice( 0, index ) ]

	return weekLabels
}

export const BarChart: React.FC = ({}) => {
	const [isLoading, setIsLoading] = useState<boolean>( false )
	const [barWidth, setBarWidth] = useState<number>( 7 )

	useEffect( () => {
		// Get the small screen breakpoint from CSS
		const style = window.getComputedStyle( document.documentElement )
		const breakpoint = parseInt( style.getPropertyValue( '--breakpoint' ).replace( 'px', '' ) )

		let resizeTimeout: NodeJS.Timeout

		// Update bars width on window resize
		const handleResize = () => {
			setIsLoading( true )
			window.innerWidth > breakpoint ? setBarWidth( 15 ) : setBarWidth( 7 )

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

	const options: ChartOptions<'bar'> = {
		responsive: true,
		maintainAspectRatio: true,
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
			}
		} as any,
	}

	const data = {
		labels: getWeekLabels(),
		datasets: [
			{
				label: 'Withdraw',
				data: [400, 100, 300, 400, 100, 200, 300],
				backgroundColor: color.mono.dark,
				borderWidth: 0,
				borderColor: 'rgba(0,0,0,0)',
				borderRadius: 30,
				borderSkipped: false,
				maxBarThickness: barWidth,
			},
			{
				label: 'Deposit',
				data: [300, 200, 400, 500, 200, 300, 400],
				backgroundColor: color.primary.base,
				borderWidth: 0,
				borderColor: 'rgba(0,0,0,0)',
				borderRadius: 30,
				borderSkipped: false,
				maxBarThickness: barWidth,
			},
		],
	}

	return isLoading ? 'loading data' : <Bar options={ options } data={ data } />
}
