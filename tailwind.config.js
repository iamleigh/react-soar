/** @type {import('tailwindcss').Config} */
export default {
  content: [
	"./index.html",
	"./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
		screens: {
			'md': '835px'
		},
		spacing: {
			'22px': '22px',
			'30px': '30px',
		}
	},
  },
  plugins: [],
}

