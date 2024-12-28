import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Sidebar } from './ui/containers/Sidebar'
import Dashboard from './ui/pages/Dashboard'
import Settings from './ui/pages/Settings'

const App: React.FC = () => {
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
			<Sidebar open={ sidebar } onClose={ closeSidebar } />

			{/* Routes */}
			<Routes>
				<Route path="/" element={<Dashboard sidebarFn={ openSidebar } />} />
				<Route path="/settings" element={<Settings sidebarFn={ openSidebar } />} />
			</Routes>
		</>
	)
}

export default App
