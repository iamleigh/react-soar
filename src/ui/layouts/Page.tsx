import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { global } from "@helper/tokens"
import { Header as UIHeader } from "@container/Header"
import { Sidebar } from "@container/Sidebar"
import { Content as UIContent } from "@container/Content"

const Header = styled(UIHeader)`
	${global.bp.tablet.min} {
		flex: 0 0 auto;
	}
`

const Content = styled(UIContent)`
	${global.bp.tablet.min} {
		flex: 1;
		overflow-y: auto;
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
