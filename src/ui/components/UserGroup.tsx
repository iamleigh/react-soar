import React, { useState } from 'react'
import styled from 'styled-components'
import { global, color, border } from '../../utils/tokens'
import { User } from './User'

const List = styled.ul`
	width: 100%;
	max-width: 100%;
	overflow-x: auto;
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	margin: 0;
	padding: 0;
	list-style: none;
`

const Item = styled.li`
	flex: 0 0 auto;
	margin: 0;
	padding: 0 10px;

	@media screen and (min-width: ${global.breakpoint}px) {
		padding: 0 15px;
	}

	&:first-child {
		padding-left: 0;
	}

	&:last-child {
		padding-right: 0;
	}
`

interface UserGroupProps {
	data: {
		name: string
		role: string
		image: string
	}[]
}

export const UserGroup: React.FC<UserGroupProps> = ({ data }) => {
	const [currentIndex, setCurrentIndex] = useState<number | null>( null )

	return (
		<List>
			{ data.map( ( user, index ) => {
				return (
					<Item key={ index }>
						<User
							name={ user.name }
							role={ user.role }
							image={ user.image }
							current={ currentIndex === index }
							onClick={ () => setCurrentIndex( index ) } />
					</Item>
				)
			}) }
		</List>
	)
}
