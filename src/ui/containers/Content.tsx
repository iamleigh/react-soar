import React from "react"
import styled from "styled-components"
import { global, color } from "../../utils/tokens"

const Container = styled.main<{ $fullwidth?: boolean }>`
	padding: 25px;
	background: ${color.secondary.light};

	@media screen and (min-width: ${global.breakpoint}px) {
		padding: 30px 40px;
	}

	@media screen and (max-width: ${global.breakpoint - 1}px) {
		${ props => props.$fullwidth && 'background: transparent;' }
	}
`

interface ContentProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
	fullwidth?: boolean
}

const Content: React.FC<ContentProps> = ({ fullwidth = false, ...props }) => {
	return (
		<Container $fullwidth={ fullwidth }>
			{ props.children }
		</Container>
	);
}

export { Content }
