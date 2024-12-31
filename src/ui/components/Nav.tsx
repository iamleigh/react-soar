import React from "react"
import styled from "styled-components"
import { NavItem } from "./NavItem"

const Container = styled.ul`
	margin: 0;
	padding: 0;
	border: 0;
	list-style: none;
`

const Nav: React.FC = ({ ...props }) => {
	const options = [
		{
			icon: 'home',
			label: 'Dashboard',
			link: '/'
		},
		{
			icon: 'transfer',
			label: 'Transactions',
			link: '/transactions'
		},
		{
			icon: 'user',
			label: 'Accounts',
			link: '/accounts'
		},
		{
			icon: 'economic-investment',
			label: 'Investments',
			link: '/investments'
		},
		{
			icon: 'credit-card',
			label: 'Credit Cards',
			link: '/credit-cards'
		},
		{
			icon: 'loan',
			label: 'Loans',
			link: '/loans'
		},
		{
			icon: 'service',
			label: 'Services',
			link: '/services'
		},
		{
			icon: 'econometrics',
			label: 'My Privileges',
			link: '/my-privileges'
		},
		{
			icon: 'settings-solid',
			label: 'Settings',
			link: '/settings'
		},
	];

	return (
		<nav { ...props }>
			<Container>
				{ options.map( ( option, index ) => {
					return (
						<NavItem
							key={ index }
							label={ option.label }
							icon={ option.icon }
							path={ option.link } />
					)
				}) }
			</Container>
		</nav>
	)
}

export { Nav }
