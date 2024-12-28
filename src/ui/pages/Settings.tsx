import React from "react"
import { Page } from "../layouts/Page"

interface SettingsProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
	sidebarFn?: ( e: React.MouseEvent<HTMLButtonElement> ) => void
}

const Settings: React.FC<SettingsProps> = ({ sidebarFn }) => {
	return (
		<Page title="Settings" sidebarFn={ sidebarFn }>
			<p>Welcome to my content</p>
		</Page>
	)
}

export default Settings
