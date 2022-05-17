import { defineConfig, configDefaults } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
	plugins: [vue()],
	test: {
		environment: 'jsdom',
		globals: true,
		include: [
			...configDefaults.include,
			'**/\\.vitepress/**/*.{test,spec}.{js,ts,jsx,tsx}',
		],
		setupFiles: [path.resolve(__dirname, './vitest/setup.ts')],
	},
})
