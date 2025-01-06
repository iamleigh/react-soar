import React from 'react'
import styled from 'styled-components'
import { global } from '@helper/tokens'
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
		${ props => props.$horizontal && 'flex: 0 0 auto;' }
		${ props => props.$horizontal && 'margin-right: 25px;' }
		${ props => !props.$horizontal && 'margin-bottom: 9px;' }

		@media screen and (min-width: ${global.breakpoint}px) {
			${ props => props.$horizontal && 'margin-right: 27px;' }
			${ props => !props.$horizontal && 'margin-bottom: 11px;' }
		}
	}
`

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
	id: string
	label: string
	placeholder?: string
	value: string
	type: 'text' | 'number' | 'email' | 'password'
	min?: number
	max?: number
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
	min,
	max,
	onChange,
	solid = false,
	horizontal = false,
	...props
}) => {
	return (
		<Container $horizontal={ horizontal } { ...props }>
			<Label htmlFor={ id } value={ label } solid={ solid } />
			<Input
				id={ id }
				type={ type }
				placeholder={ placeholder }
				value={ value }
				{ ...( 'number' === type && { min: min }) }
				{ ...( 'number' === type && { max: max }) }
				onChange={ onChange } solid={ solid } />
		</Container>
	)
}
