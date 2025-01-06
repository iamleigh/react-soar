import React from 'react'
import styled from 'styled-components'

const Table = styled.table`
	width: 100%;
	display: table;
	table-layout: fixed;
	border-collapse: collapse;
	border-spacing: 0;
`

export const TransactionGroup: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
	return (
		<Table>
			<tbody>{ children }</tbody>
		</Table>
	)
}
