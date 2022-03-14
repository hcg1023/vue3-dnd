/// <reference types="vitest" />
/// <reference types="vitest/globals" />
import { defineConfig } from 'vite'
import * as path from 'path'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		dts({
			root: path.resolve(__dirname, './lib'),
			outputDir: path.resolve(__dirname, '/dist'),
		}),
	],
	build: {
		lib: {
			entry: path.resolve(__dirname, './lib/index.ts'),
			formats: ['cjs', 'es'],
			fileName: format => `${format}/index.js`,
		},
		rollupOptions: {
			external: [
				'@react-dnd/invariant',
				'@react-dnd/shallowequal',
				'dnd-core',
				'fast-deep-equal',
			],
		},
	},
	resolve: {
		alias: {
			'vue3-dnd': path.resolve(__dirname, './lib'),
		},
	},
	test: {
		environment: 'jsdom',
		globals: true,
	},
})
