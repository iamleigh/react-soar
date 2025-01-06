import React from "react";
import styled from "styled-components";
import { color } from "@helper/tokens";
import { Icon as UIIcon } from "./Icon";

const Container = styled.h1`
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	margin: 0;
	padding: 0;
	color: ${color.primary.dark};
	font-size: 25px;
	font-weight: 800;
`;

const Icon = styled(UIIcon)`
	flex: 0 0 auto;
	padding: 2px;
	color: ${color.mono.dark};
	font-size: 30px;
`;

const Name = styled.span`
	min-width: 1px;
	flex: 1;
	margin-left: 10px;
`;

const Logo: React.FC = ({ ...props }) => {
	return (
		<Container { ...props }>
			<Icon name="task" />
			<Name>Soar Task</Name>
		</Container>
	);
}

export { Logo }
