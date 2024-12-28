import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { global } from "../../utils/tokens"
import { Header as UIHeader } from "../containers/Header"
import { Sidebar } from "../containers/Sidebar"
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
}

const Page: React.FC<PageProps> = ({
	title,
	fullwidth,
	...props
}) => {
	const [sidebar, setSidebar] = useState(false)

	useEffect(() => {
		// Get the small screen breakpoint from CSS
		const style = window.getComputedStyle( document.documentElement )
		const breakpoint = parseInt( style.getPropertyValue( '--bp-sm' ).replace( 'px', '' ) )

		// Update sidebar on window resize
		const handleResize = () => window.innerWidth > breakpoint && setSidebar( false )
		window.addEventListener( 'resize', handleResize )

		// Cleanup on unmount
		return () => {
			window.removeEventListener( 'resize', handleResize )
		}
	}, [])

	const openSidebar = () => setSidebar(!sidebar)
	const closeSidebar = () => setSidebar(false)

	return (
		<>
			<Header title={ title } sidebarFn={ openSidebar } />
			<Sidebar open={ sidebar } onClose={ closeSidebar } />
			<Content fullwidth={ fullwidth }>
				{ props.children }
			</Content>
		</>
	)
}

export { Page }
