import React from "react"
import { Header } from "../containers/Header"
import { Content } from "../containers/Content"

interface PageProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
	title: string,
	fullwidth?: boolean
}

const Page: React.FC<PageProps> = ({
	title,
	fullwidth,
	...props
}) => {
	return (
		<>
			<Header title={ title } />
			<Content fullwidth={ fullwidth }>
				{ props.children }
			</Content>
		</>
	)
}

export { Page }
