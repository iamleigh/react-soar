import React from 'react'
import styled from 'styled-components'
import { global, color, border } from '@helper/tokens'

const Button = styled.button`
	position: relative;
	padding: 0 6px 9px;
	color: ${ color.secondary.dark };
	font-weight: 500;
	font-size: 13px;
	line-height: 16px;
	transition: ${ global.transition };

	@media screen and (min-width: ${global.breakpoint}px) {
		padding: 0 15px 11px;
		font-size: 16px;
		line-height: 19px;
	}

	&:after {
		content: " ";
		width: 100%;
		height: 2px;
		opacity: 0;
		position: absolute;
		left: 0;
		bottom: 0;
		border-radius: ${ border.radius.sm } ${ border.radius.sm } 0 0;
		background: ${ color.mono.dark };
	}

	&:hover,
	&:focus,
	&[aria-selected] {
		color: ${ color.mono.dark };
	}

	&[aria-selected]:after {
		opacity: 1;
	}
`

interface TabButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	id: string
	label: string
	selected?: boolean
}

export const TabButton: React.FC<TabButtonProps> = ({
	id,
	label,
	selected = false,
	...props
}) => {
	return (
		<Button
			id={ `${ id }__button` }
			type="button"
			role="tab"
			{ ...( selected && { 'aria-selected': true }) }
			aria-controls={ `${ id }__panel` }
			{ ...( !selected && { tabIndex: -1 }) }
			{ ...props }>
			{ label }
		</Button>
	)
}
