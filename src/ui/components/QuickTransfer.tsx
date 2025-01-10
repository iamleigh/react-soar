import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { global } from '@helper/tokens'
import { Button } from '@component/Button'
import { InputField } from '@component/InputField'

const FieldGroup = styled.div`
	position: relative;
	margin-top: 25px;

	@media screen and (min-width: ${global.breakpoint}px) {
		margin-top: 27px;
	}

	button {
		position: absolute;
		top: 0;
		right: 0;
	}

	input {
		padding-right: 125px;

		@media screen and (min-width: ${global.breakpoint}px) {
			padding-right: 114px;
		}
	}
`

export const QuickTransfer: React.FC = () => {
	const [payee, setPayee] = useState<boolean>(false)
	const [currentPayee, setCurrentPayee] = useState<number|null>(null)
	const [value, setValue] = useState<string>( '' )
	const [contacts, setContacts] = useState<{
		name: string
		role: string
		image: string
	}[]>([])

	const handleTransaction = () => {
		setValue( '' )
		window.alert( `$${ value } successfully transferred` )
	}

	useEffect(() => {
		fetch( '/api/contacts' )
			.then((res) => res.json())
			.then((data: {name: string, role: string, image: string}[]) => setContacts(data))
			.catch((err) => console.log( 'Failed to fetch contacts:', err ))
	}, [])

	return (
		<>
			<ul>
				{ contacts.map( ( contact, index ) => {
					const payeeFunc = () => {
						setCurrentPayee(index)

						if ( index === currentPayee ) {
							setCurrentPayee(null)
							setPayee(false)
						} else {
							setPayee(true)
						}
					}

					return (
						<li key={ `contact-${ index }` }>
							<button onClick={payeeFunc}>
								{ contact.name }<br/>
								{ contact.role }
							</button>
						</li>
					)
				}) }
			</ul>

			<FieldGroup>
				<InputField
					id="transfer-amount"
					type="number"
					label="Write Amount"
					placeholder="525.50"
					value={ value || '' }
					min={0}
					solid={ true }
					horizontal={ true }
					{ ...( ! payee && { disabled: true } ) }
					onChange={ e => setValue( e.target.value ) } />

				<Button
					label="Send"
					icon={{ name: 'paper-plane', position: 'trail' }}
					inline={ true }
					{ ...( ( ! payee || 0 >= Number( value ) ) && { disabled: true }) }
					onClick={ handleTransaction } />
			</FieldGroup>
		</>
	)
}
