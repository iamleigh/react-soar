import React from 'react'
import styled from 'styled-components'
import { global, color } from '../../utils/tokens'

const UIInput = styled.input<{ $solid?: boolean }>`
	width: 100%;
	height: 40px;
	display: block;
	margin: 0;
	padding: 6px 14px 11px;
	border: 1px solid ${ props => props.$solid ? 'transparent' : '#DFEAF2' };
	border-radius: ${ props => props.$solid ? 50 : 15 }px;
	background: ${ props => props.$solid ? '#EDF1F7' : color.mono.light };
	color: ${ props => props.$solid ? color.primary.dark : color.mono.dark };
	font-size: 12px;
	line-height: 15px;
	transition: ${ global.transition };

	@media screen and (min-width: ${global.breakpoint}px) {
		height: 50px;
		padding: 6px ${ props => props.$solid ? 29 : 19 }px;
		font-size: ${ props => props.$solid ? 15 : 16 }px;
		line-height: ${ props => props.$solid ? 18 : 20 }px;
	}

	&::placeholder {
		color: ${ color.secondary.dark };
	}

	&:hover,
	&:focus {
		border-color: ${ color.secondary.base };
	}

	&:focus {
		background: ${ props => props.$solid ? color.mono.light : color.secondary.light };
	}
`

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	solid?: boolean
}

export const Input: React.FC<InputProps> = ({
	solid = false,
	...props
}) => {
	return <UIInput { ...props } $solid={ solid } />
}
