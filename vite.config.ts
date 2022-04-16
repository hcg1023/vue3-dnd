/// <reference types="vitest" />
/// <reference types="vitest/globals" />
import { defineConfig } from 'vite'
import * as path from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
	base: process.env.NODE_ENV === 'production' ? '/vue3-dnd' : '/',
	plugins: [vue()],
	build: {
		outDir: 'dist-docs',
	},
	resolve: {
		alias: {
			'vue3-dnd': path.resolve(__dirname, './lib'),
			'@vitepress': path.resolve(__dirname, './docs/.vitepress'),
		},
	},
	test: {
		environment: 'jsdom',
		globals: true,
	},
})
