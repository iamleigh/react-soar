import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Sidebar } from './ui/containers/Sidebar'
import Dashboard from './ui/pages/Dashboard'
import Settings from './ui/pages/Settings'

const App: React.FC = () => {
	return (
		<>
			<Sidebar />

			{/* Routes */}
			<Routes>
				<Route path="/" element={<Dashboard />} />
				<Route path="/settings" element={<Settings />} />
			</Routes>
		</>
	)
}

export default App
