import React from "react"
import styled from "styled-components"
import { global, color, border } from "../../utils/tokens"
import { Page } from "../layouts/Page"
import { Tabs } from "../containers/Tabs"

const Container = styled.div`
	padding: 20px;
	border-radius: ${ border.radius.md }px;
	background: ${ color.mono.light };

	@media screen and (min-width: ${global.breakpoint}px) {
		padding: 30px;
		border-radius: ${ border.radius.lg }px;
	}
`

const Settings: React.FC = () => {
	const editProfile = (
		<p>Edit Profile content goes here</p>
	)

	const preferences = (
		<p>Preferences content goes here</p>
	)

	const security = (
		<p>Security content goes here</p>
	)

	const tabs = [
		{
			id: 'edit-profile',
			label: 'Edit Profile',
			content: editProfile
		},
		{
			id: 'preferences',
			label: 'Preferences',
			content: preferences
		},
		{
			id: 'security',
			label: 'Security',
			content: security
		},
	]

	return (
		<Page title="Settings">
			<Container>
				<Tabs datasets={ tabs } />
			</Container>
		</Page>
	)
}

export default Settings
