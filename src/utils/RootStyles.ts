import { createGlobalStyle } from 'styled-components'
import { global } from './tokens'

const Helpers = createGlobalStyle`
	:root {
		--breakpoint: ${global.breakpoint};
		--sidebar-width: ${global.sidebar};
	}
`

export default Helpers
