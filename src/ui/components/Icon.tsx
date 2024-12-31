import React from "react";
import styled from "styled-components";

const Container = styled.span`
	pointer-events: none;
`;

type IconProps = {
	name: string,
	className?: string,
}

const Icon: React.FC<IconProps> = ({ name, className }) => {
	const extraClass = 'undefined' !== typeof className && '' !== className
		? ' ' + className
		: '';

	return (
		<Container
			className={`soaricons soaricons--${ name }${ extraClass }`}
			aria-hidden="true" />
	);
}

export { Icon }
