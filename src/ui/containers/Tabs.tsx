import React, { useState } from 'react'
import styled from 'styled-components'
import { TabButton } from '../components/TabButton'
import { TabPanel } from '../components/TabPanel'

const ButtonGroup = styled.div`
	box-shadow: inset 0 -1px 0 #F4F5F7;
`

const Title = styled.h3`
	width: 1px;
	height: 1px;
	overflow: hidden;
	clip: rect(1px, 1px, 1px, 1px);
	clip-path: inset(50%);
	position: absolute !important;
	margin: -1px;
	padding: 0;
	border: 0;
	word-wrap: normal !important;
`

interface TabsProps {
	id?: string
	title?: string
	datasets: {
		id: string
		label: string
		content: React.ReactNode
	}[]
}

export const Tabs: React.FC<TabsProps> = ({ id, title, datasets }) => {
	const [selected, setSelected] = useState<string>( datasets[0]?.id || '' )

	const handleTabSelection = ( id: string ) => {
		setSelected( id )
	}

	return (
		<>
			{ title && id && <Title id={ id }>{ title }</Title> }

			<ButtonGroup
				role="tablist"
				{ ...( title && id && { 'aria-labelledby': id } ) }>
				{ datasets.map( ( data, index ) => {
					return (
						<TabButton
							key={ index }
							id={ data.id }
							label={ data.label }
							selected={ data.id === selected }
							onClick={ () => handleTabSelection( data.id ) } />
					)
				}) }
			</ButtonGroup>

			{ datasets.map( ( data, index ) => {
				return (
					<TabPanel
						key={ index }
						id={ data.id }
						selected={ data.id === selected }>
						{ data.content }
					</TabPanel>
				)
			}) }
		</>
	)
}
