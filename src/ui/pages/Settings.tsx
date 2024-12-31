import React from "react"
import styled from "styled-components"
import { global, color, border } from "../../utils/tokens"
import { Page } from "../layouts/Page"
import { Tabs } from "../containers/Tabs"
import { ProfileSettings } from "../layouts/ProfileSettings"

const Container = styled.div`
	padding: 20px;
	border-radius: ${ border.radius.md }px;
	background: ${ color.mono.light };

	@media screen and (min-width: ${global.breakpoint}px) {
		padding: 30px;
		border-radius: ${ border.radius.lg }px;
	}
`

const ComingSoon = styled.div`
	width: 100%;
	height: 200px;
	display: flex;
	align-items: center;
	justify-content: center;
	background: ${ color.secondary.light };
`

const SoonTab: React.FC<{ title?: string }> = ({ title }) => {
	return (
		<ComingSoon>
			<div style={{ textAlign: 'center' }}>
				{ title && <p style={{ marginBottom: 10, fontWeight: '600' }}>{ title }</p> }
				<p>Coming Soon</p>
			</div>
		</ComingSoon>
	)
}

const Settings: React.FC = () => {
	const tabs = [
		{
			id: 'edit-profile',
			label: 'Edit Profile',
			content: <ProfileSettings />
		},
		{
			id: 'preferences',
			label: 'Preferences',
			content: <SoonTab title="Preferences" />
		},
		{
			id: 'security',
			label: 'Security',
			content: <SoonTab title="Security" />
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
