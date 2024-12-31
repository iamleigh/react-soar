import React from 'react'
import styled from 'styled-components'
import { global, color, border } from '../../utils/tokens'
import { Page } from '../layouts/Page'

const Container = styled.div`
	height: 100%;
	min-height: 200px;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 20px;
	border-radius: ${ border.radius.md }px;
	background: ${ color.mono.light };

	@media screen and (min-width: ${global.breakpoint}px) {
		padding: 30px;
		border-radius: ${ border.radius.lg }px;
	}
`

const NotFound: React.FC = () => {
	return (
		<Page title="Not Found">
			<Container>
				<p style={{ textAlign: 'center' }}>Oops, I think you might be lost...<br />or the page you're looking for is under construction</p>
			</Container>
		</Page>
	)
}

export default NotFound
