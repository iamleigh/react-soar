import React from 'react'
import styled from 'styled-components'
import { global } from '../../utils/tokens'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, registerables } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { Pie } from 'react-chartjs-2'

ChartJS.register( ...registerables, ArcElement, Tooltip, Legend, ChartDataLabels )

const Container = styled.div`
	width: 100%;
	height: 100%;
	max-height: 220px;

	@media screen and (min-width: ${global.breakpoint}px) {
		max-height: 260px;
	}

	canvas {
		margin: 0 auto;
	}
`

interface PieChartProps {
	datasets: {
		label: string,
		value: number,
		color: string
	}[]
}

export const PieChart: React.FC<PieChartProps> = ({ datasets }) => {
	const getLabels: string[] = [],
		getValues: number[] = [],
		getColors: string[] = []

	datasets.forEach( data => {
		getLabels.push( data.label )
		getValues.push( data.value )
		getColors.push( data.color )
	})

	const options = {
		elements: {
			arc: {
				borderAlign: 'inner' as const,
				borderWidth: 5,
				borderColor: '#fff',
				borderJoinStyle: 'miter' as const
			}
		},
		plugins: {
			legend: {
				display: false
			},
			tooltip: {
				enabled: false
			},
			datalabels: {
				color: '#ffffff',
				font: {
					size: 13,
					weight: 'bold' as const,
				},
				textAlign: 'center' as const,
				anchor: 'center' as const,
				formatter: ( value: number, context: { chart: ChartJS, dataIndex: number } ) => {
					const label = context.chart.data.labels?.[ context.dataIndex ]
					return `${ value }%\n${ label }`
				}
			}
		},
		// cutout: '1%'
	}

	const data = {
		labels: getLabels,
		datasets: [{
			data: getValues,
			backgroundColor: getColors,
			// weight: [2, 1.5, 2.5, 3]
		}]
	}

	return (
		<Container>
			<Pie options={ options } data={ data } />
		</Container>
	)
}
