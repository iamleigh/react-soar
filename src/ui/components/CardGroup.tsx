import React from "react"
import styled from "styled-components"

const Container = styled.div`
	width: 100%;
	overflow-x: auto;
	overflow-y: hidden;
	display: flex;
	align-items: flex-start;
`

const CardGroup: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
	return (
		<Container>
			{ children }
		</Container>
	)
}

export { CardGroup }
