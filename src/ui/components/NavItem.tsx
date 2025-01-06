import React from "react";
import styled from "styled-components";
import { global, color, border } from "@helper/tokens";
import { NavLink } from "react-router-dom";
import { Icon as UIIcon } from "./Icon";

const Container = styled.li`
	color: ${color.mono.base};
	font-weight: 500;
	font-size: 18px;
	line-height: 22px;
	transition: ${global.transition};
`

const Link = styled(NavLink)`
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	padding: 12px 25px 13px;
	color: inherit;
	text-decoration: none;

	@media screen and (min-width: ${global.breakpoint}px) {
		padding: 17px 30px 18px;
	}

	&:hover {
		color: ${color.mono.dark};
	}

	&[aria-current] {
		position: relative;
		color: ${color.mono.dark};

		&:before {
			content: " ";
			width: 6px;
			position: absolute;
			top: 0;
			left: 0;
			bottom: 0;
			border-top-right-radius: ${border.radius.sm}px;
			border-bottom-right-radius: ${border.radius.sm}px;
			background: ${color.mono.dark};
		}
	}
`

const Icon = styled(UIIcon)`
	flex: 0 0 auto;
	font-size: 23px;

	@media screen and (min-width: ${global.breakpoint}px) {
		font-size: 25px;
	}
`

const Label = styled.span`
	min-width: 1px;
	flex: 1;
	margin-left: 26px;
	${global.text.truncate}
`

type NavItemProps = {
	label: string,
	icon?: string,
	path?: string
}

const NavItem: React.FC<NavItemProps> = ({ label, icon, path }) => {
	return (
		<Container>
			<Link to={ path ? path : '/' } end>
				{ icon && <Icon name={ icon } /> }
				<Label>{ label }</Label>
			</Link>
		</Container>
	)
}

export { NavItem }
