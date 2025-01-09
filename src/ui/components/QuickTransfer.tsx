import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { global } from '@helper/tokens'
import { Button } from './Button'
import { InputField } from './InputField'
import { UserGroup } from '@component/UserGroup'

const Form = styled.div`
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
	const [transferAmount, setTransferAmount] = useState( '' )
	const [contacts, setContacts] = useState<{
		name: string
		role: string
		image: string
	}[]>([])

	const handleTransferAmount = () => {
		setTransferAmount( '' )
		window.alert( `$${ transferAmount } successfully transferred` )
	}

	useEffect(() => {
		fetch( '/api/contacts' )
			.then((res) => res.json())
			.then((data: {name: string, role: string, image: string}[]) => setContacts(data))
			.catch((err) => console.log( 'Failed to fetch contacts:', err ))
	}, [])

	return (
		<>
			<UserGroup data={ contacts } />

			<Form>
				<InputField
					id="transfer-amount"
					type="number"
					label="Write Amount"
					placeholder="525.50"
					value={ transferAmount || '' }
					min={0}
					solid={ true }
					horizontal={ true }
					onChange={ ( e ) => setTransferAmount( e.target.value ) } />

				<Button
					label="Send"
					icon={{ name: 'paper-plane', position: 'trail' }}
					inline={ true }
					disabled={ !transferAmount.trim() }
					onClick={ handleTransferAmount } />
			</Form>
		</>
	)
}
