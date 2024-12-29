import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': './src',
			'@styles': './src/assets/scss',
			'@images': './src/assets/images',
			'@utils': './src/utils',
			'@components': './src/ui/components',
			'@containers': './src/ui/containers',
			'@layouts': './src/ui/layouts',
			'@pages': './src/ui/pages',
		}
	}
})
