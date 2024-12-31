import React from 'react'
import styled from 'styled-components'
import { global, color } from '../../utils/tokens'

const UILabel = styled.label<{ $solid?: boolean }>`
	display: block;
	margin: 0;
	padding: 0;
	color: ${ props => props.$solid ? color.secondary.dark : color.mono.dark };
	font-size: ${ props => props.$solid ? 12 : 13 }px;
	line-height: ${ props => props.$solid ? 15 : 16 }px;

	@media screen and (min-width: ${global.breakpoint}px) {
		font-size: 16px;
		line-height: 19px;
	}

	&[for] {
		cursor: pointer;
	}
`

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
	value: string
	solid?: boolean
}

export const Label: React.FC<LabelProps> = ({ value, solid, ...props }) => {
	return (
		<UILabel { ...props } $solid={ solid }>{ value }</UILabel>
	)
}
