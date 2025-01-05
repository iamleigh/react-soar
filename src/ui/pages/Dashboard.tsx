import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { global, color } from '../../utils/tokens'
import { Page } from '../layouts/Page'
import { Box } from '../components/Box'
import { Card as UICard, CardProps } from '../components/Card'
import { CardGroup } from '../components/CardGroup'
import { Transaction, TransactionProps } from '../components/Transaction'
import { TransactionGroup } from '../components/TransactionGroup'
import { BarChart } from '../components/BarChart'
import { PieChart } from '../components/PieChart'
import { LineChart } from '../components/LineChart'
import { UserGroup } from '../components/UserGroup'
import { InputField } from '../components/InputField'
import { Button } from '../components/Button'

const Card = styled(UICard)`
	flex: 0 0 auto;

	&:not(:first-child) {
		margin-left: 20px;

		@media screen and (min-width: ${global.breakpoint}px) {
			margin-left: 30px;
		}
	}
`

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

const Row = styled.div`
	margin: 0 0 22px;

	@media screen and (min-width: ${global.breakpoint}px) {
		display: flex;
		flex-flow: row wrap;
		margin: 0 -15px 30px;
	}

	&:last-child {
		@media screen and (min-width: ${global.breakpoint}px) {
			margin-bottom: 0;
		}
	}
`

const Col = styled.div<{ $size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 }>`
	margin-bottom: 22px;

	@media screen and (min-width: ${global.breakpoint}px) {
		min-width: 1px;
		margin-bottom: 0;
		padding: 0 15px;

		@media screen and (min-width: ${global.breakpoint}px) {
			flex: ${ props => props.$size !== undefined ? '0 0 ' + (props.$size / 12) * 100 + '%' : '1' };
		}
	}
`

const Dashboard: React.FC = () => {
	const [cards, setCards] = useState<CardProps[]>([])
	const [transactions, setTransactions] = useState<TransactionProps[]>([])
	const [activity, setActivity] = useState<{
		label: string
		data: number[]
		backgroundColor: string
	}[]>([])
	const [expenses, setExpenses] = useState<{
		label: string
		value: number
		color: string
	}[]>([])
	const [contacts, setContacts] = useState<{
		name: string
		role: string
		image: string
	}[]>([])

	useEffect(() => {
		fetch( '/api/card' )
			.then((res) => res.json())
			.then((data: CardProps[]) => setCards(data))
			.catch((err) => console.log( 'Failed to fetch cards:', err ))

		fetch( '/api/transactions' )
			.then((res) => res.json())
			.then((data) => {
				const currentDate = new Date()

				// Filter out transactions with future dates
				const validTransactions = data.filter( ( transaction: TransactionProps ) => {
					const transactionDate = new Date( transaction.date )
					return transactionDate <= currentDate
				})

				// Sort transactions by date from newest to oldest
				const latestTransactions = validTransactions.slice(-3).reverse()
				setTransactions(latestTransactions)

				// Get the last 7 days, including today
				const today = new Date()
				const lastWeekDates = Array.from({ length: 7 }, ( _, i ) => {
					const date = new Date( today )
					date.setDate( today.getDate() - i )
					return date.toISOString().split( 'T' )[0] // Format: YYYY-MM-DD
				})

				// Initialize activity data structure
				const deposits = Array(7).fill(0)
				const withdrawals = Array(7).fill(0)

				// Process transactions
				data.forEach( ( transaction: TransactionProps ) => {
					const transactionDate = transaction.date
					const transactionIndex = lastWeekDates.indexOf( transactionDate )

					if ( -1 !== transactionIndex ) {
						if ( 0 < transaction.amount ) {
							// Positive amounts are deposits
							deposits[transactionIndex] += transaction.amount
						} else {
							// Negative amounts are withdrawals
							withdrawals[transactionIndex] += Math.abs( transaction.amount )
						}
					}
				})

				// Prepare final activity array
				const activityData = [
					{
						label: 'Withdrawal',
						data: withdrawals.reverse(),
						backgroundColor: color.mono.dark
					},
					{
						label: 'Deposit',
						data: deposits.reverse(),
						backgroundColor: color.primary.base
					}
				]

				setActivity( activityData )

				// Prepare expenses data for PieChart
				const categoryData: { [key: string]: number } = {}

				// Sum up absolute values of negative transactions by category
				data.forEach( ( transaction: TransactionProps ) => {
					if ( transaction.amount < 0 ) {
						// Categorize negative amounts
						const category = transaction.category || 'others'
						categoryData[category] = ( categoryData[category] || 0 ) + Math.abs( transaction.amount )
					}
				} )

				// Calculate the total sum of all categories
				const totalExpenses = Object.values( categoryData ).reduce( ( sum, value ) => sum + value, 0 )

				const getExpenseLabel = ( category: string ) => {
					let assignedLabel

					switch ( category ) {
						case 'bill':
							assignedLabel = 'Bill Expense'
							break

						case 'entertainment':
							assignedLabel = 'Entertainment'
							break

						case 'investment':
							assignedLabel = 'Investment'
							break

						case 'other':
							assignedLabel = 'Others'
							break
					}

					return assignedLabel
				}

				const getExpenseColor = ( category: string ) => {
					let assignedColor;

					switch ( category ) {
						case 'investment':
							assignedColor = color.primary.base
							break

						case 'bill':
							assignedColor = '#FC7900'
							break

						case 'entertainment':
							assignedColor = color.primary.dark
							break

						default:
							assignedColor = '#232323'
							break
					}

					return assignedColor;
				}

				// Convert categoryData into PieChart format with percentages
				const expensesData = Object.keys( categoryData ).map(( category ) => ({
					label: getExpenseLabel( category ) as string,
					value: parseInt( ( ( categoryData[category] / totalExpenses ) * 100 ).toFixed( 0 ) ),
					color: getExpenseColor( category ) as string
				}))

				setExpenses( expensesData )
			})
			.catch((err) => console.log( 'Failed to fetch transactions:', err ))

		fetch( '/api/contacts' )
			.then((res) => res.json())
			.then((data: {name: string, role: string, image: string}[]) => setContacts(data))
			.catch((err) => console.log( 'Failed to fetch contacts:', err ))
	}, [])

	const [transferAmount, setTransferAmount] = useState( '' )
	const handleTransferAmount = () => {
		setTransferAmount( '' )
		window.alert( `$${ transferAmount } successfully transferred` )
	}

	return (
		<Page title="Dashboard" fullwidth={ true }>
			<Row>
				<Col $size={ 8 }>
					<Box title="My Cards" path="/credit-cards" boxed={ false }>
						<CardGroup>
							{ cards && cards.map( ( card, index ) => {
								return (
									<Card
										key={ index }
										name={ card.name }
										number={ card.number }
										balance={ card.balance }
										expiration={ card.expiration }
										light={ card.light } />
								)
							}) }
						</CardGroup>
					</Box>
				</Col>

				<Col $size={ 4 }>
					<Box title="Recent Transactions">
						<TransactionGroup>
							{ transactions && transactions.map( ( transaction, index ) => {
								return (
									<Transaction
										key={ index }
										amount={ transaction.amount }
										date={ transaction.date }
										description={ transaction.description }
										source={ transaction.source }
										/>
								)
							}) }
						</TransactionGroup>
					</Box>
				</Col>
			</Row>

			<Row>
				<Col $size={ 8 }>
					<Box title="Weekly Activity" fullHeight={ true }>
						{ activity.length > 0 && <BarChart datasets={ activity } /> }
					</Box>
				</Col>

				<Col $size={ 4 }>
					<Box title="Expense Statistics" fullHeight={ true }>
						{ expenses.length > 0 && <PieChart datasets={ expenses } /> }
					</Box>
				</Col>
			</Row>

			<Row>
				<Col $size={ 5 }>
					<Box title="Quick Transfer">
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
					</Box>
				</Col>

				<Col $size={ 7 }>
					<Box title="Balance History">
						<LineChart />
					</Box>
				</Col>
			</Row>
		</Page>
	)
}

export default Dashboard
