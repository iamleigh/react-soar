import { createGlobalStyle } from 'styled-components'
import { global, color, font } from './tokens'

const GlobalStyles = createGlobalStyle`
	/* Reset Styles */
	*,
	*:before,
	*:after {
		margin: 0;
		padding: 0;
		border: 0;
	}

	*:focus {
		outline: none;
	}

	/* Base Styles */
	html,
	body {
		${global.bp.tablet.min} {
			overflow: hidden;
			height: 100%;
		}
	}

	html {
		font-size: ${font.size.base.sm};

		${global.bp.tablet.min} {
			font-size: ${font.size.base.md};
		}
	}

	body {
		background: ${color.mono.light};
		color: ${color.mono.dark};
		font-family: ${font.family.base};
		font-size: 1rem;
		line-height: 1.2rem;
		letter-spacing: 0;
		font-synthesis: none;
		text-rendering: optimizeLegibility;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;

		${global.bp.tablet.min} {
			padding-left: ${global.sidebar}px;
		}

		&,
		* {
			box-sizing: border-box;
		}

		#root {
			position: relative;

			${global.bp.tablet.min} {
				height: 100%;
				display: flex;
				flex-direction: column;
			}
		}
	}

	/* Custom Styles */
	a {
		text-decoration: none;
		transition: ${global.transition};
	}

	ul, ol {
		list-style: none;
	}

	button {
		cursor: pointer;
		background: transparent;
	}

	[hidden] {
		display: none;
	}
`

export default GlobalStyles
