import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), svgr()],
	resolve: {
		alias: {
			'@': path.resolve( __dirname, './src' ),
			'@image': path.resolve( __dirname, './src/assets/images' ),
			'@styles': path.resolve( __dirname, './src/assets/scss' ),
			'@helper': path.resolve( __dirname, './src/utils' ),
			'@component': path.resolve( __dirname, './src/ui/components' ),
			'@container': path.resolve( __dirname, './src/ui/containers' ),
			'@layout': path.resolve( __dirname, './src/ui/layouts' ),
			'@page': path.resolve( __dirname, './src/ui/pages' ),
		}
	}
})
