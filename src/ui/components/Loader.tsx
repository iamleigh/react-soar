import React from 'react'
import styled, { keyframes } from 'styled-components'
import { global, color, spacing, font } from '@helper/tokens'
import spinner from '@image/spinner.svg'

const spin = keyframes`
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
`

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100%;
	padding: ${spacing.vertical.sm}px ${spacing.horizontal.sm}px;
	background: ${color.secondary.light};
	text-align: center;

	${global.bp.tablet} {
		padding: ${spacing.vertical.md}px ${spacing.horizontal.md}px;
	}
`

const Spinner = styled.img`
	width: 50px;
	flex: 0 0 auto;
	margin-bottom: ${spacing.vertical.sm}px;
	animation: ${spin} 1s linear infinite;
`

const Text = styled.p<{ $bold?: boolean }>`
	margin-bottom: ${spacing.vertical.sm/2}px;
	color: ${color.primary.dark};
	${props => props.$bold && 'font-weight: bold;'}
	${props => props.$bold && 'font-size: ' + font.size.title.sm + ';'}

	&:last-child {
		margin-bottom: 0;
	}

	${global.bp.tablet} {
		${props => props.$bold && 'font-size: ' + font.size.title.md + ';'}
	}
`

interface LoaderProps {
	title: string
	message?: string
}

export const Loader: React.FC<LoaderProps> = ({ title, message }) => {
	return (
		<Container>
			<Spinner src={ spinner } alt="Loading spinner" />
			{ title && <Text $bold={ true }>{ title }</Text> }
			{ message && <Text>{ message }</Text> }
		</Container>
	)
}
