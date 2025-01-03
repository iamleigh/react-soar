import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './ui/pages/Dashboard'
import Settings from './ui/pages/Settings'
import NotFound from './ui/pages/404'

const App: React.FC = () => {
	return (
		<Routes>
			<Route path="/" element={<Dashboard />} />
			<Route path="/settings" element={<Settings />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	)
}

export default App
