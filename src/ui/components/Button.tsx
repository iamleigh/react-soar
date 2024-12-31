import React from 'react'
import styled from 'styled-components'
import { global, color } from '../../utils/tokens'
import { Icon } from './Icon'

const UIButton = styled.button<{ $inline?: boolean }>`
	cursor: pointer;
	width: ${ props => props.$inline ? 'auto' : '100%' };
	min-width: ${ props => props.$inline ? '100px' : '190px' };
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 6px 12px;
	border: 2px solid transparent;
	border-radius: ${ props => props.$inline ? 50 : 10 }px;
	background: ${ color.mono.dark };
	color: ${ color.mono.light };
	font-weight: 500;
	font-size: ${ props => props.$inline ? 13 : 15 }px;
	line-height: 18px;
	text-align: center;
	transition: ${ global.transition };

	@media screen and (min-width: ${global.breakpoint}px) {
		height: 50px;
		padding: 6px ${ props => props.$inline ? '24px' : '12px' };
	}

	&:hover,
	&:focus {
		border-color: ${ color.mono.dark };
		background: ${ color.mono.light };
		color: ${ color.mono.dark };
	}

	&:focus {
		border-color: ${ color.primary.base };
		color: ${ color.primary.base };
	}
`

const UIIcon = styled( Icon )<{ $position?: 'lead' | 'trail' }>`
	margin-${ props => 'lead' === props.$position ? 'right' : 'left' }: 9px;
	font-size: 14px;

	@media screen and (min-width: ${global.breakpoint}px) {
		margin-${ props => 'lead' === props.$position ? 'right' : 'left' }: 11px;
		font-size: 26px;
	}
`

const Label = styled.label`
	pointer-events: none;
	display: block;
	flex: 0 0 auto;
`

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	label: string
	icon?: {
		name: string
		position: 'lead' | 'trail'
	}
	inline?: boolean
}

export const Button: React.FC<ButtonProps> = ({ label, icon, inline, ...props }) => {
	let hasIcon = false

	if ( 'undefined' !== typeof icon ) {
		hasIcon = 'undefined' !== typeof icon.name && '' !== icon.name
			? true
			: false
	}

	return (
		<UIButton { ...props } $inline={ inline }>
			{ hasIcon && 'lead' === icon?.position && <UIIcon name={ icon.name } /> }
			{ hasIcon ? <Label>{ label }</Label> : label }
			{ hasIcon && 'trail' === icon?.position && <UIIcon name={ icon.name } /> }
		</UIButton>
	)
}
