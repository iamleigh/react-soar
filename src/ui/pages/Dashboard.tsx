import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { global } from "../../utils/tokens"
import { Page } from "../layouts/Page"
import { Box } from "../components/Box"
import { Card as UICard } from "../components/Card"
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
	const [cards, setCards] = useState([]);

	useEffect(() => {
		fetch( '/api/card' )
			.then((res) => res.json())
			.then((data) => setCards(data))
	}, [])

	return (
		<Page title="Dashboard" fullwidth={ true }>
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
		</Page>
	)
}

export default Dashboard
