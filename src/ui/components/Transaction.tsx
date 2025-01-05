import React from 'react'
import styled from 'styled-components'
import { global, color } from '../../utils/tokens'
import { Icon } from './Icon'

const Container = styled.tr`
	margin: 0;
	border: 0;
	padding: 0;

	&:not(:last-child) td {
		padding-bottom: 19px;

		@media screen and (min-width: ${global.breakpoint}px) {
			padding-bottom: 15px;
		}
	}
`

const Details = styled.td`
	position: relative;
	padding: 7px 0;
	padding-left: 65px;
	color: ${ color.secondary.dark };
	font-weight: 400;
	font-size: 12px;
	line-height: 15px;

	@media screen and (min-width: ${global.breakpoint}px) {
		padding: 6px 0 5px;
		padding-left: 70px;
		font-size: 15px;
		line-height: 18px;
	}

	p {
		${global.text.truncate}
	}
`

const Source = styled.div`
	width: 50px;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 0;
	left: 0;
	border-radius: 100%;
	font-size: 16px;

	@media screen and (min-width: ${global.breakpoint}px) {
		width: 55px;
		height: 55px;
		font-size: 20px;
	}
`

const Title = styled.p`
	margin-bottom: 4px;
	color: ${ color.mono.dark };
	font-weight: 500;
	font-size: 14px;
	line-height: 17px;

	@media screen and (min-width: ${global.breakpoint}px) {
		margin-bottom: 7px;
		font-size: 16px;
		line-height: 19px;
	}
`

const Amount = styled.td<{ $debit?: boolean }>`
	padding: 7px 0 19px;
	border: 0;
	color: ${ props => props.$debit ? '#FF4B4A' : '#41D4A8' };
	font-weight: 500;
	font-size: 11px;
	line-height: 13px;
	text-align: right;

	@media screen and (min-width: ${global.breakpoint}px) {
		font-size: 16px;
		line-height: 19px;
		padding: 6px 0 15px;
	}
`

export interface TransactionProps {
	date: string,
	amount: number,
	description: string,
	source?: string,
	category?: string
}

export const Transaction: React.FC<TransactionProps> = ({
	date,
	amount,
	description,
	source
}) => {
	let sourceBg, sourceColor, sourceIcon;

	const formatBalance = (value: number): string => {
		return new Intl.NumberFormat( 'es-US', {
			style: 'currency',
			currency: 'USD',
			minimumFractionDigits: value % 1 === 0 ? 0 : 2
		}).format( value )
	}

	const formatDate = (value: string): string => {
		const [year, month, day] = value.split( '-' )
		const newDate = new Date( Number( year ), Number( month ) - 1, Number( day ) );

		return new Intl.DateTimeFormat( 'en-US', {
			day: '2-digit',
			month: 'long',
			year: 'numeric'
		}).format( newDate )
	}

	switch ( source ) {
		case 'card':
			sourceBg = color.yellow.light
			sourceColor = color.yellow.base
			sourceIcon = 'money'
			break;

		case 'paypal':
			sourceBg = color.primary.light
			sourceColor = color.primary.base
			sourceIcon = 'paypal'
			break;

		case 'transfer':
			sourceBg = color.green.light
			sourceColor = color.green.base
			sourceIcon = 'coin'
			break;

		default:
			sourceBg = color.primary.light
			sourceColor = color.primary.base
			sourceIcon = 'coin'
			break;
	}

	return (
		<Container>
			<Details>
				<Source style={{ background: sourceBg, color: sourceColor }} aria-hidden="true">
					<Icon name={ sourceIcon } />
				</Source>
				<Title>{ description }</Title>
				<p>{ formatDate( date ) }</p>
			</Details>

			<Amount $debit={ amount < 0 ? true : false }>
				{ amount > 0 && '+' }
				{ formatBalance( amount ) }
			</Amount>
		</Container>
	)
}
