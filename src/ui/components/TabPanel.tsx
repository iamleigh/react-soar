import React from 'react'
import styled from 'styled-components'
import { global, color } from '../../utils/tokens'

const Container = styled.div<{ $isHidden?: boolean }>`
	${ props => props.$isHidden && 'display: none;' }
	padding: 45px 0;

	@media screen and (min-width: ${global.breakpoint}px) {
		padding: 40px 0;
	}
`

interface TabPanelProps extends React.PropsWithChildren<{}> {
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
