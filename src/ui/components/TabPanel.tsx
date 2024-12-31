import React from 'react'
import styled from 'styled-components'
import { global } from '../../utils/tokens'

const Container = styled.div<{ $isHidden?: boolean }>`
	${ props => props.$isHidden && 'display: none;' }
	padding: 45px 0;

	@media screen and (min-width: ${global.breakpoint}px) {
		padding: 40px 30px;
	}
`

interface TabPanelProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
	id: string
	selected?: boolean
}

export const TabPanel: React.FC<TabPanelProps> = ({
	id,
	selected = false,
	children
}) => {
	return (
		<Container
			id={ `${ id }__panel` }
			role="tabpanel"
			aria-labelledby={ `${ id }__button` }
			$isHidden={ !selected }>
			{ children }
		</Container>
	)
}
