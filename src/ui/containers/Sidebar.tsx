import React from "react"
import styled from "styled-components"
import { global, color } from "../../utils/tokens"
import { ButtonIcon } from "../components/ButtonIcon"
import { Logo as UILogo } from "../components/Logo"
import { Nav as UINav } from "../components/Nav"

const Container = styled.aside<{ $open?: boolean }>`
	width: 100%;
	max-width: 250px;
	${props => !props.$open && 'display: none;'}
	position: absolute;
	z-index: 1;
	top: 0;
	left: 0;
	bottom: 0;
	padding: 25px;
	background: ${color.mono.light};
	box-shadow: 1px 0 #E6EFF5;

	@media screen and (min-width: ${global.breakpoint}px) {
		left: -${global.sidebar}px;
		display: block;
		padding: 30px;
	}
`

const Close = styled(ButtonIcon)`
	position: absolute;
	left: 100%;
	margin-left: 20px;

	@media screen and (min-width: ${global.breakpoint}px) {
		display: none;
	}
`

const Logo = styled(UILogo)`
	margin-bottom: 25px;

	@media screen and (min-width: ${global.breakpoint}px) {
		margin-bottom: 30px;
	}
`

const Nav = styled(UINav)`
	display: block;
	margin: 0 -25px;

	@media screen and (min-width: ${global.breakpoint}px) {
		margin: 0 -30px;
	}
`

interface SidebarProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
	open?: boolean;
	onClose?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, onClose }) => {
	const uiClass = 'soarui-sidebar';

	return (
		<Container
			role="complementary"
			className={ uiClass }
			$open={ open }
			aria-label="Sidebar">
			<Close
				icon="bars"
				label="Close Sidebar"
				aria-controls={ uiClass }
				small={ true }
				onClick={ onClose } />

			<Logo />

			<Nav />
		</Container>
	);
}

export { Sidebar }
