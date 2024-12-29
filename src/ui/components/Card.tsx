import React from "react"
import styled from "styled-components"
import '@fontsource/lato/400.css'
import '@fontsource/lato/700.css' // Use 700 instead of 600 since that weight is not available through @fontsource
import { global, color, border } from "../../utils/tokens"

// Import card chip
import chipLight1x from '../../assets/images/card-chip-light.png'
import chipLight2x from '../../assets/images/card-chip-light@2x.png'
import chipDark1x from '../../assets/images/card-chip-dark.png'
import chipDark2x from '../../assets/images/card-chip-dark@2x.png'

// Import network logos
import MastercardLogo from '../../assets/images/logo-mastercard.svg?react'

const Container = styled.div<{ $light?: boolean }>`
	width: 100%;
	max-width: 265px;
	overflow: hidden;
	position: relative;
	padding: 18px 20px;
	border-radius: ${border.radius.md}px;
	${ props => props.$light && 'border: 1px solid #DFEAF2;' }
	${ props => props.$light && 'background: ' + color.mono.light + ';' }
	${ props => !props.$light && 'background: #5B5A6F;' }
	${ props => !props.$light && 'background: -moz-linear-gradient(135deg, rgba(91,90,111,1) 0%, rgba(0,0,0,1) 100%);' }
	${ props => !props.$light && 'background: -webkit-linear-gradient(135deg, rgba(91,90,111,1) 0%, rgba(0,0,0,1) 100%);' }
	${ props => !props.$light && 'background: linear-gradient(135deg, rgba(91,90,111,1) 0%, rgba(0,0,0,1) 100%);' }
	${ props => !props.$light && 'filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#5B5A6F",endColorstr="#000000",GradientType=1);' }
	color: ${ props => props.$light ? color.primary.dark : color.mono.light };
	font-family: "Lato", sans-serif;

	@media screen and (min-width: ${global.breakpoint}px) {
		max-width: 350px;
		padding: 24px 26px;
	}
`

const Title = styled.h3`
	width: 1px;
	height: 1px;
	overflow: hidden;
	clip: rect(1px, 1px, 1px, 1px);
	clip-path: inset(50%);
	position: absolute !important;
	margin: -1px;
	padding: 0;
	border: 0;
	word-wrap: normal !important;
`

const Balance = styled.div`
	display: block;
	margin-bottom: 23px;

	@media screen and (min-width: ${global.breakpoint}px) {
		margin-bottom: 33px;
	}
`

const BalanceLabel = styled.p`
	margin: 0 0 1px;
	padding: 0;
	font-family: inherit;
	font-weight: 400;
	font-size: 11px;
	line-height: 13px;

	@media screen and (min-width: ${global.breakpoint}px) {
		margin: 0;
		font-size: 12px;
		line-height: 14px;
	}
`

const BalanceAmount = styled.p`
	margin: 0;
	padding: 0;
	font-family: inherit;
	font-weight: 700;
	font-size: 16px;
	line-height: 19px;

	@media screen and (min-width: ${global.breakpoint}px) {
		font-size: 20px;
		line-height: 24px;
	}
`

const Details = styled.div`
	display: flex;
	margin-bottom: 16px;
`

const DetailsGroup = styled.div`
	flex: 1;
`

const DetailsTitle = styled.span<{ $light?: boolean }>`
	display: block;
	color: ${ props => props.$light ? color.secondary.dark : 'rgba(255,255,255,0.7)' };
	font-size: 10px;
	line-height: 12px;
	text-transform: uppercase;

	@media screen and (min-width: ${global.breakpoint}px) {
		font-size: 12px;
		line-height: 14px;
	}
`

const DetailsContent = styled.span`
	font-weight: 700;
	font-size: 13px;
	line-height: 16px;

	@media screen and (min-width: ${global.breakpoint}px) {
		font-size: 15px;
		line-height: 18px;
	}
`

const Number = styled.div<{ $light?: boolean }>`
	position: relative;
	margin: 0 -20px -18px;
	padding: 16px 20px;
	${ props => props.$light && 'border-top: 1px solid #DFEAF2;' }
	${ props => !props.$light && 'background: rgba(255,255,255,0.15);' }
	${ props => !props.$light && 'background: -moz-linear-gradient(180deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 100%);' }
	${ props => !props.$light && 'background: -webkit-linear-gradient(180deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 100%);' }
	${ props => !props.$light && 'background: linear-gradient(180deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 100%);' }
	${ props => !props.$light && 'filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="rgba(255,255,255,0.15)",endColorstr="rgba(255,255,255,0.15)",GradientType=1);' }
	font-weight: 700;
	font-size: 15px;
	line-height: 18px;

	svg {
		position: absolute;
		top: 50%;
		right: 20px;
		transform: translateY(-50%);
	}

	@media screen and (min-width: ${global.breakpoint}px) {
		margin: 0 -26px -24px;
		padding: 22px 26px;
		font-size: 22px;
		line-height: 26px;
	}
`

const Chip = styled.img`
	position: absolute;
	top: 18px;
	right: 20px;

	@media screen and (min-width: ${global.breakpoint}px) {
		top: 24px;
		right: 24px;
	}

	@media screen and (max-width: ${global.breakpoint - 1}px) {
		width: 29px;
		height: 29px;
	}
`

const Mastercard = styled(MastercardLogo)<{ $light?: boolean }>`
	width: auto;
	height: 18px;

	@media screen and (min-width: ${global.breakpoint}px) {
		height: 30px;
	}

	circle {
		fill: ${ props => !props.$light ? color.mono.light : '#9199AF' };
	}
`

export interface CardProps {
	name: string
	balance: number
	expiration: string
	number: number
	light: boolean
	className?: string
}

export const Card: React.FC<CardProps> = ({
	name,
	number,
	balance,
	expiration,
	light,
	className
}) => {
	const maskNumber = (cardNumber: string | number): string => {
		// Ensure that the input is a string
		const cardString = String( cardNumber )

		// Hide the middle digits
		const firstFour = cardString.slice( 0, 4 )
		const lastFour = cardString.slice( -4 )
		const maskedSection = cardString.slice( 4, -4 ).replace( /\d/g, '*' )

		// Return the formatted result
		return `${ firstFour } ${ maskedSection.slice( 0, 4 )} ${ maskedSection.slice( 4, 8 )} ${ lastFour }`
	}

	const formatBalance = (cardBalance: number): string => {
		return new Intl.NumberFormat( 'es-US', {
			style: 'currency',
			currency: 'USD',
			minimumFractionDigits: cardBalance % 1 === 0 ? 0 : 2
		}).format( cardBalance )
	}

	const formatExpiration = (expirationDate: string): string => {
		const [year, month] = expirationDate.split( '-' )
		return `${ month }/${ year.slice( -2 ) }`
	}

	const uniqueId = `card-${ maskNumber( number ).slice( 0, 4 ) }-${ maskNumber( number ).slice( -4 ) }`;

	const extraClass = 'undefined' !== typeof className && '' !== className
		? ' ' + className
		: '';

	return (
		<Container
			role="group"
			className={ extraClass }
			aria-labelledby={ `${ uniqueId }__title` }
			$light={ light }>
			<Title id={ `${ uniqueId }__title` }>Card Information</Title>

			<Balance>
				<BalanceLabel>Balance</BalanceLabel>
				<BalanceAmount aria-label={`Balance: $${ balance }`}>
					{ formatBalance( balance ) }
				</BalanceAmount>
			</Balance>

			<Details>
				<DetailsGroup>
					<DetailsTitle $light={ light }>Card Holder</DetailsTitle>
					<DetailsContent>{ name }</DetailsContent>
				</DetailsGroup>

				<DetailsGroup>
					<DetailsTitle $light={ light }>Valid Thru</DetailsTitle>
					<DetailsContent>{ formatExpiration( expiration ) }</DetailsContent>
				</DetailsGroup>
			</Details>

			<Number $light={ light }>
				{ maskNumber( number ) }
				<Mastercard aria-hidden="true" $light={ light } />
			</Number>

			<Chip
				src={ !light ? chipLight1x : chipDark1x }
				srcSet={ `${ !light ? chipLight1x : chipDark1x } 1x, ${ !light ? chipLight2x : chipDark2x } 2x` }
				alt="Card Chip"
				aria-hidden="true" />
		</Container>
	)
}
