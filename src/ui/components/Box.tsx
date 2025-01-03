import React from "react"
import styled from "styled-components"
import { global, color, border } from "../../utils/tokens"
import { Link as UILink } from "react-router-dom"

const Container = styled.section<{ $fullHeight?: boolean }>`
	display: block;

	@media screen and (min-width: ${global.breakpoint}px) {
		${ props => props.$fullHeight && 'display: flex;' }
		${ props => props.$fullHeight && 'flex-flow: column nowrap;' }
		${ props => props.$fullHeight && 'height: 100%;' }
	}
`

const Header = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 22px;

	@media screen and (min-width: ${global.breakpoint}px) {
		margin-bottom: 20px;
	}
`

const Title = styled.h2`
	min-width: 1px;
	flex: 1;
	margin: 0;
	padding: 0;
	color: ${color.primary.dark};
	font-weight: 600;
	font-size: 16px;
	line-height: 19px;

	@media screen and (min-width: ${global.breakpoint}px) {
		font-size: 22px;
		line-height: 27px;
	}
`

const Link = styled(UILink)`
	flex: 0 0 auto;
	margin-left: 15px;
	color: ${color.primary.dark};
	font-weight: 600;
	font-size: 14px;
	line-height: 17px;
	text-decoration: none;
	transition: ${global.transition};

	@media screen and (min-width: ${global.breakpoint}px) {
		font-size: 17px;
		line-height: 21px;
	}

	&:hover,
	&:focus {
		color: ${color.primary.base};
	}
`

const Body = styled.div<{ $boxed?: boolean, $fullHeight?: boolean }>`
	${props => props.$boxed && 'padding: 25px;'}
	${props => props.$boxed && 'border-radius: ' + border.radius.lg + 'px;' }
	${props => props.$boxed && 'background: ' + color.mono.light + ';'}

	@media screen and (min-width: ${global.breakpoint}px) {
		${ props => props.$fullHeight && 'flex: 1;' }
	}
`

interface BoxProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
	title: string
	path?: string
	boxed?: boolean
	fullHeight?: boolean
}

const Box: React.FC<BoxProps> = ({ title, path, boxed = true, fullHeight = false, ...props }) => {
	const uniqueId = `${title?.toLowerCase().replace(/\s+/g, '-')}-title`;

	return (
		<Container aria-labelledby={ uniqueId } { ...props } $fullHeight={ fullHeight }>
			<Header>
				<Title id={ uniqueId }>{ title }</Title>
				{ path && <Link to={ path }>See All</Link> }
			</Header>

			<Body $boxed={ boxed } $fullHeight={ fullHeight }>
				{ props.children }
			</Body>
		</Container>
	);
}

export { Box }
