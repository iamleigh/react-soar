import React from 'react'
import styled from 'styled-components'
import { global } from '../../utils/tokens'
import { Input } from './Input'
import { Label } from './Label'

const Container = styled.div<{ $horizontal?: boolean }>`
	${ props => props.$horizontal && 'display: flex;' }
	${ props => props.$horizontal && 'flex-flow: row nowrap;' }
	${ props => props.$horizontal && 'align-items: center;' }
	margin: ${ props => props.$horizontal ? 29 : 16 }px 0 0;

	&:first-child {
		margin: 0;
	}

	label {
		flex: 0 0 auto;
		margin-right: 25px;

		@media screen and (min-width: ${global.breakpoint}px) {
			margin-right: 27px;
		}
	}
`

interface InputFieldProps {
	id: string
	label: string
	placeholder?: string
	value: string
	type: 'text' | 'number' | 'email'
	onChange?: ( e: React.ChangeEvent<HTMLInputElement> ) => void
	solid?: boolean
	horizontal?: boolean
}

export const InputField: React.FC<InputFieldProps> = ({
	id,
	label,
	placeholder,
	value,
	type = 'text',
	onChange,
	solid = false,
	horizontal = false
}) => {
	return (
		<Container $horizontal={ horizontal }>
			<Label htmlFor={ id } value={ label } solid={ solid } />
			<Input id={ id } type={ type } placeholder={ placeholder } value={ value } onChange={ onChange } solid={ solid } />
		</Container>
	)
}
