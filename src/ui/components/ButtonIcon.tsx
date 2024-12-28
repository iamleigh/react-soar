import React from "react";
import styled from "styled-components";
import { global, color } from "../../utils/tokens";
import { Icon as UIIcon } from "./Icon";

const Container = styled.button<{ $light?: boolean, $small?: boolean }>`
	cursor: pointer;
	width: ${ props => props.$small ? '30px' : '50px' };
	height: ${ props => props.$small ? '30px' : '50px' };
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0;
	border-width: 1px;
	border-style: solid;
	border-color: ${ props => props.$light ? color.secondary.light : color.mono.dark };
	border-radius: 100%;
	background: ${ props => props.$light ? color.secondary.light : color.mono.dark };
	color: ${ props => props.$light ? color.secondary.dark : color.mono.light };
	transition: ${ global.transition };

	&:hover {
		border-color: ${ props => props.$light ? color.secondary.base : color.mono.dark };
		${ props => props.$light ? '' : 'background: ' + color.mono.light + ';' }
		${ props => props.$light ? '' : 'color: ' + color.mono.dark + ';' }
	}

	&:focus {
		border-color: ${ props => props.$light ? color.secondary.base : color.mono.dark };
		background: ${ props => props.$light ? color.secondary.base : color.mono.dark };
		color: ${ props => props.$light ? color.secondary.light : color.mono.light };
	}
`

const Icon = styled(UIIcon)<{ $small?: boolean }>`
	font-size: ${ props => props.$small ? '15px' : '25px'};
`

const Label = styled.span`
	width: 1px;
	height: 1px;
	overflow: hidden;
	clip: rect(1px, 1px, 1px, 1px);
	clip-path: inset(50%);
	position: absolute !important;
	margin: -1px;
	padding: 0;
	border: 0;
	word-wrap: normal !important;
`

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	icon: string
	label: string
	dark?: boolean
	small?: boolean
	className?: string
}

const ButtonIcon: React.FC<ButtonProps> = ({
	icon,
	label,
	dark,
	small,
	...props
}) => {
	return (
		<Container
			type="button"
			$light={ !dark }
			$small={ small }
			{ ...props }>
			<Icon name={ icon } $small={ small } />
			<Label>{ label }</Label>
		</Container>
	)
}

export { ButtonIcon }
