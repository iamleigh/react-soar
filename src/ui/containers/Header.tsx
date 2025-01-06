import React from "react"
import styled from "styled-components"
import { global, color } from "@helper/tokens"
import { User } from "@component/User"
import { Search as UISearch } from "@component/Search"
import { ButtonIcon } from "@component/ButtonIcon"

const tokens = {
	header: {
		paddingX: 25,
		paddingY: 20
	},
	search: {
		height: 40
	}
}

const tokensLg = {
	header: {
		paddingX: 40,
		paddingY: 20
	}
}

const Container = styled.header`
	display: flex;
	flex-flow: row wrap;
	align-items: center;
	position: relative;
	padding: ${tokens.header.paddingY + 5}px ${tokens.header.paddingX}px ${tokens.header.paddingY}px;
	padding-bottom: ${(tokens.header.paddingY * 2) + tokens.search.height}px;
	background: ${color.mono.light};

	@media screen and (min-width: ${global.breakpoint}px) {
		padding: ${tokensLg.header.paddingY }px ${tokensLg.header.paddingX}px;
		box-shadow: 0 1px #E6EFF5;
	}
`

const LeftGroup = styled.div`
	flex: 0 0 auto;

	@media screen and (min-width: ${global.breakpoint}px) {
		display: none;
	}
`

const RightGroup = styled.div`
	display: flex;
	align-items: center;
	flex: 0 1 auto;

	button {
		@media screen and (min-width: ${global.breakpoint}px) {
			margin-right: 30px;
		}

		@media screen and (max-width: ${global.breakpoint - 1}px) {
			display: none;
		}
	}
`

const Search = styled(UISearch)`
	@media screen and (min-width: ${global.breakpoint}px) {
		width: 255px;
		margin-right: 30px;
	}

	@media screen and (max-width: ${global.breakpoint - 1}px) {
		width: auto;
		position: absolute;
		bottom: 20px;
		left: 20px;
		right: 20px;
	}
`

const Title = styled.h1`
	min-width: 1px;
	display: block;
	flex: 1;
	margin: 0;
	padding: 0;
	color: ${color.primary.dark};
	font-weight: 600;
	font-size: 20px;
	line-height: 24px;

	@media screen and (min-width: ${global.breakpoint }px) {
		font-size: 28px;
		line-height: 34px;
	}

	@media screen and (max-width: ${global.breakpoint - 1}px) {
		text-align: center;
	}
`

interface HeaderProps {
	title: string
	sidebarFn?: ( e: React.MouseEvent<HTMLButtonElement> ) => void
}

const Header: React.FC<HeaderProps> = ({ title, sidebarFn, ...props }) => {
	return (
		<Container { ...props }>
			<LeftGroup>
				<ButtonIcon icon="bars" label="Open Menu" onClick={ sidebarFn } />
			</LeftGroup>

			<Title>{ title }</Title>

			<RightGroup>
				<Search />
				<ButtonIcon icon="settings" label="Open Settings" />
				<ButtonIcon icon="notification" label="Open Notification" />
				<User />
			</RightGroup>
		</Container>
	);
}

export { Header }
