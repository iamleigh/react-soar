import React from "react"
import { Page } from "../layouts/Page"

interface DashboardProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
	sidebarFn?: ( e: React.MouseEvent<HTMLButtonElement> ) => void
}

const Dashboard: React.FC<DashboardProps> = ({ sidebarFn }) => {
	return (
		<Page title="Dashboard" fullwidth={ true } sidebarFn={ sidebarFn }>
			<p>Welcome to my content</p>
		</Page>
	)
}

export default Dashboard
