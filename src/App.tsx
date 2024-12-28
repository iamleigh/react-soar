import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './ui/pages/Dashboard'
import Settings from './ui/pages/Settings'
import { Link } from 'react-router-dom'

const App: React.FC = () => {
	return (
		<>
			{/* Navigation */}
			<nav>
				<ul>
					<li><Link to="/">Dashboard</Link></li>
					<li><Link to="/settings">Settings</Link></li>
				</ul>
			</nav>

			{/* Routes */}
			<Routes>
				<Route path="/" element={<Dashboard />} />
				<Route path="/settings" element={<Settings />} />
			</Routes>
		</>
	)
}

export default App
