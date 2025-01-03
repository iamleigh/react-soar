import React from 'react'
import styled from 'styled-components'
import { global, color } from '../../utils/tokens'
import { Icon as UIIcon } from './Icon'

const Container = styled.div`
	width: 100%;
	position: relative;
`

const Input = styled.input`
	width: 100%;
	display: block;
	padding: 11px 17px 11px 44px;
	border: 1px solid ${color.secondary.light};
	border-radius: 40px;
	background: ${color.secondary.light};
	color: ${color.secondary.base};
	font-size: 13px;
	line-height: 16px;
	transition: ${global.transition};

	@media screen and (min-width: 835px) {
		padding: 15px 24px 15px 59px;
		font-size: 15px;
		line-height: 18px;
	}

	&::placeholder {
		color: ${color.secondary.base};
	}

	&:hover,
	&:focus {
		border-color: ${color.secondary.base};
	}

	&:focus {
		background: ${color.mono.light};
	}
`

const Icon = styled(UIIcon)`
	position: absolute;
	top: 50%;
	left: 18px;
	transform: translateY(-50%);
	color: ${color.secondary.base};
	font-size: 15px;

	@media screen and (min-width: 835px) {
		left: 25px;
		font-size: 20px;
	}
`

const Search: React.FC = ({ ...props }) => {
	return (
		<Container { ...props }>
			<Icon name="magnifying-glass" />
			<Input type="text" placeholder="Search for something" />
		</Container>
	)
}

export { Search }
