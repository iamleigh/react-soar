import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { global, color } from "../../utils/tokens"
import { Page } from "../layouts/Page"
import { Box } from "../components/Box"
import { Card as UICard, CardProps } from "../components/Card"
import { CardGroup } from "../components/CardGroup"
import { Transaction, TransactionProps } from "../components/Transaction"
import { TransactionGroup } from "../components/TransactionGroup"
import { BarChart } from "../components/BarChart"
import { PieChart } from "../components/PieChart"
import { LineChart } from "../components/LineChart"

const Card = styled(UICard)`
	flex: 0 0 auto;

	&:not(:first-child) {
		margin-left: 20px;

		@media screen and (min-width: ${global.breakpoint}px) {
			margin-left: 30px;
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
	}, [])

	return (
		<Page title="Dashboard" fullwidth={ true }>
			<div className="flex flex-col lg:flex-row lg:space-x-[30px] mb-[22px]">
				<Box title="My Cards" path="/credit-cards" boxed={ false } className="basis-full mb-[22px] lg:basis-8/12 lg:mb-0">
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

				<Box title="Recent Transactions" className="basis-full lg:basis-4/12">
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
			</div>

			<div className="flex flex-col lg:flex-row lg:space-x-[30px] mb-[22px]">
				<Box title="Weekly Activity" className="basis-full mb-[22px] lg:basis-8/12 lg:mb-0">
					{ activity.length > 0 && <BarChart datasets={ activity } /> }
				</Box>

				<Box title="Expense Statistics" className="basis-full lg:basis-4/12">
					{ expenses.length > 0 && <PieChart datasets={ expenses } /> }
				</Box>
			</div>

			<div className="flex flex-col lg:flex-row lg:space-x-[30px]">
				<Box title="Quick Transfer" className="basis-full mb-[22px] lg:basis-4/12 lg:mb-0">
					<p>Content goes here</p>
				</Box>

				<Box title="Balance History" className="basis-full lg:basis-8/12">
					<LineChart />
				</Box>
			</div>
		</Page>
	)
}

export default Dashboard
