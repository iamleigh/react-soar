import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { global } from "../../utils/tokens"
import { Page } from "../layouts/Page"
import { Box } from "../components/Box"
import { Card as UICard, CardProps } from "../components/Card"
import { CardGroup } from "../components/CardGroup"

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
	const [cards, setCards] = useState<CardProps[]>([]);

	useEffect(() => {
		fetch( '/api/card' )
			.then((res) => res.json())
			.then((data: CardProps[]) => setCards(data))
			.catch((err) => console.log( 'Failed to fetch cards:', err ))
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
					Transactions go here
				</Box>
			</div>

			<div className="flex flex-col lg:flex-row lg:space-x-[30px] mb-[22px]">
				<Box title="Weekly Activity" className="basis-full mb-[22px] lg:basis-8/12 lg:mb-0">
					<p>Content goes here</p>
				</Box>

				<Box title="Expense Statistics" className="basis-full lg:basis-4/12">
					<p>Content goes here</p>
				</Box>
			</div>

			<div className="flex flex-col lg:flex-row lg:space-x-[30px]">
				<Box title="Quick Transfer" className="basis-full mb-[22px] lg:basis-4/12 lg:mb-0">
					<p>Content goes here</p>
				</Box>

				<Box title="Balance History" className="basis-full lg:basis-8/12">
					<p>Content goes here</p>
				</Box>
			</div>
		</Page>
	)
}

export default Dashboard
