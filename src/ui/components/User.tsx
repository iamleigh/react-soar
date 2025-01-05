import React from "react"
import styled from "styled-components"
import { global, color } from "../../utils/tokens"
import unknown from '../../assets/images/avatar-empty.png'

const Container = styled.div<{ $isButton?: boolean, $isCurrent?: boolean }>`
	display: block;
	margin: 0;
	padding: 0;
	${ props => props.$isButton && 'border: 0;' }
	${ props => props.$isButton && 'background: transparent;' }
	text-align: center;
	${ props => props.$isCurrent && 'font-weight: bold;' }
	${ props => props.$isButton && 'transition: ' + global.transition + ';' }
`

const Image = styled.img<{ $alone?: boolean }>`
	width: ${ props => props.$alone ? '35px' : '50px' };
	height: ${ props => props.$alone ? '35px' : '50px' };
	display: block;
	margin: 0 auto;
	border-radius: 100%;

	@media screen and (min-width: 835px) {
		width: ${ props => props.$alone ? '60px' : '70px' };
		height: ${ props => props.$alone ? '60px' : '70px' };
	}
`;

const Caption = styled.span<{ $light?: boolean, $small?: boolean }>`
	display: block;
	margin-top: ${ props => props.$small ? 1 : 12 }px;
	color: ${ props => props.$light ? color.secondary.dark : color.mono.dark };
	font-size: 12px;
	line-height: 15px;
	transition: ${ global.transition };

	@media screen and (min-width: 835px) {
		margin-top: ${ props => props.$small ? 5 : 15 }px;
		font-size: ${ props => props.$small ? '15px' : '16px' };
		line-height: ${ props => props.$small ? '18px' : '19px' };
	}

	${Container}:is(button):hover &,
	${Container}:is(button):focus & {
		${ props => !props.$light && 'color: ' + color.primary.base + ';' }
	}
`

type UserProps = {
	image?: string,
	name?: string,
	role?: string,
	current?: boolean,
	onClick?: ( event: React.MouseEvent<HTMLButtonElement> ) => void
}

const User: React.FC<UserProps> = ({ image, name, role, current = false, onClick }) => {
	const isButton = 'function' === typeof onClick ? true : false
	const imageUrl = image && '' !== image ? image : unknown;

	let element = <Image src={ imageUrl } alt="Profile picture" $alone />

	if ( name || role ) {
		element = (
			<Container
				role="group"
				{ ...( isButton && { type: 'button' }) }
				aria-label={`${ name }, ${ role }`}
				{ ...( isButton && { as: 'button' }) }
				{ ...( isButton && { $isButton: true }) }
				{ ...( current && { $isCurrent: current }) }
				onClick={ onClick }>
				<Image src={ imageUrl } alt={`Profile picture of ${ name }`} />
				{ name && <Caption>{ name }</Caption> }
				{ role && <Caption $light $small>{ role }</Caption> }
			</Container>
		)
	}

	return element
}

export { User }
