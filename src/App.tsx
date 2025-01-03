import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { SpeedInsights } from '@vercel/speed-insights/react'
import GlobalStyles from './utils/GlobalStyles'
import Helpers from './utils/Helpers'
import Dashboard from './ui/pages/Dashboard'
import Settings from './ui/pages/Settings'
import NotFound from './ui/pages/404'

const App: React.FC = () => {
	return (
		<>
			<Helpers />
			<GlobalStyles />
			<Routes>
				<Route path="/" element={<Dashboard />} />
				<Route path="/settings" element={<Settings />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<SpeedInsights />
		</>
	)
}

export default App
