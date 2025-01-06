import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { SpeedInsights } from '@vercel/speed-insights/react'
import GlobalStyles from '@helper/GlobalStyles'
import Helpers from '@/utils/RootStyles'
import Dashboard from '@page/Dashboard'
import Settings from '@page/Settings'
import NotFound from '@page/404'

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
