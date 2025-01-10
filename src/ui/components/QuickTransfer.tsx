import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { global, color } from '@helper/tokens'
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

const UserGroup = styled.ul`
	overflow-x: auto;
	display: flex;
	flex-flow: row nowrap;
	margin: 0 -10px;
`

const UserItem = styled.li`
	flex: 0 0 auto;
	padding: 0 10px;
`

const UserButton = styled.button`
	display: block;
`

const UserImage = styled.img<{ $active?: boolean }>`
	width: 70px;
	height: 70px;
	display: block;
	margin: 0 auto;
	border-radius: 50%;
`

const UserText = styled.span<{ $small?: boolean, $active?: boolean }>`
	display: block;
	margin-top: ${ props => props.$small ? 1 : 12 }px;
	color: ${props => props.$small ? color.secondary.dark : color.mono.dark };
	font-size: 16px;
	text-align: center;
	${props => props.$active && 'text-shadow: 0 0 1px black;'}
	transition: ${global.transition};

	${UserButton}:hover & {
		${props => !props.$small && 'color: ' + color.primary.base + ';' }
		${props => !props.$small && 'text-shadow: 0 0 1px ' + color.primary.base + ';'}
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
		setPayee( false )
		setCurrentPayee( null )
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
			<UserGroup>
				{ contacts.map( ( contact, index ) => {
					const payeeFunc = () => {
						setCurrentPayee(index)

						if ( index === currentPayee ) {
							setCurrentPayee(null)
							setValue( '' )
							setPayee(false)
						} else {
							setPayee(true)
						}
					}

					return (
						<UserItem key={ `contact-${ index }` }>
							<UserButton onClick={ payeeFunc }>
								<UserImage $active={ index === currentPayee } src={ contact.image } alt={ `${contact.name} avatar` } />
								<UserText $active={ index === currentPayee }>{ contact.name }</UserText>
								<UserText $small={ true } $active={ index === currentPayee }>{ contact.role }</UserText>
							</UserButton>
						</UserItem>
					)
				}) }
			</UserGroup>

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
