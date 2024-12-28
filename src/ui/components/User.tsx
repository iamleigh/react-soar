import React from "react"
import styled from "styled-components"

const Container = styled.div`
	display: block;
	text-align: center;
`

const Image = styled.img<{ $alone?: boolean }>`
	width: ${ props => props.$alone ? '35px' : '50px' };
	height: ${ props => props.$alone ? '35px' : '50px' };
	display: block;
	border-radius: 100%;

	@media screen and (min-width: 835px) {
		width: ${ props => props.$alone ? '60px' : '70px' };
		height: ${ props => props.$alone ? '60px' : '70px' };
	}
`;

const Caption = styled.span<{ $light?: boolean, $small?: boolean, $highlight?: boolean }>`
	display: block;
	color: ${ props => props.$light ? 'var(--color-secondary-dark)' : 'var(--color-mono-dark)' };
	font-weight: ${ props => props.$highlight ? '800' : '400' };
	font-size: 12px;
	line-height: 15px;

	@media screen and (min-width: 835px) {
		font-size: ${ props => props.$small ? '15px' : '16px' };
		line-height: ${ props => props.$small ? '18px' : '19px' };
	}
`

type UserProps = {
	image: string,
	name?: string,
	role?: string,
}

const User: React.FC<UserProps> = ({ image, name, role }) => {
	let element = <Image src={ image } alt="Profile picture" $alone />

	if ( name || role ) {
		element = (
			<Container role="group" aria-label={`${ name }, ${ role }`}>
				<Image src={ image } alt={`Profile picture of ${ name }`} />
				{ name && <Caption>{ name }</Caption> }
				{ role && <Caption $light $small>{ role }</Caption> }
			</Container>
		)
	}

	return element
}

export { User }