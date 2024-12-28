import React from "react"
import styled from "styled-components"
import { global } from "../../utils/tokens"
import { Header as UIHeader } from "../containers/Header"
import { Content as UIContent } from "../containers/Content"

const Header = styled(UIHeader)`
	@media screen and (min-width: ${global.breakpoint}px) {
		flex: 0 0 auto;
	}
`

const Content = styled(UIContent)`
	@media screen and (min-width: ${global.breakpoint}px) {
		flex: 1;
	}
`

interface PageProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
	title: string
	fullwidth?: boolean
	sidebarFn?: ( e: React.MouseEvent<HTMLButtonElement> ) => void
}

const Page: React.FC<PageProps> = ({
	title,
	fullwidth,
	sidebarFn,
	...props
}) => {
	return (
		<>
			<Header title={ title } sidebarFn={ sidebarFn } />
			<Content fullwidth={ fullwidth }>
				{ props.children }
			</Content>
		</>
	)
}

export { Page }
