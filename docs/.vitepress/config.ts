import { defineConfig } from 'vitepress'
import path from 'path'

export default defineConfig({
	base: process.env.NODE_ENV === 'production' ? '/vue3-dnd' : '/',
	lang: 'zh-CN',
	vite: {
		resolve: {
			alias: {
				'vue3-dnd': path.resolve(process.cwd(), './lib'),
			},
		},
	},
	locales: {
		'/': {
			lang: 'zh-CN',
			title: 'Vue3 DnD',
			description: 'Drag and Drop for Vue3.',
		},
		'/en/': {
			lang: 'en-US',
			title: 'Vue3 DnD',
			description: 'Drag and Drop for Vue3.',
		},
	},
	themeConfig: {
		locales: {
			'/': {
				// 多语言下拉菜单的标题
				selectText: '选择语言',
				label: '简体中文',
				nav: [
					{ text: '首页', link: '/', activeMatch: '^/$' },
					{
						text: '教程',
						link: '/zh/guide/',
						activeMatch: '^/zh/guide/',
					},
					{
						text: '示例',
						link: '/zh/example/',
						activeMatch: '^/zh/example/',
					},
				],
				sidebar: {
					'/zh/guide/': [
						{
							text: '入门',
							link: '/zh/guide/',
							children: [
								{
									text: '概述',
									link: '/zh/guide/overview',
								},
								// {
								// 	text: '测试',
								// 	link: '/zh/guide/testing',
								// },
								{
									text: '常见问题',
									link: '/zh/guide/faq',
								},
								{
									text: '示例',
									link: '/zh/example/',
								},
							],
						},
						{
							text: '组件',
							children: [
								{
									text: 'DndProvider',
									link: '/zh/guide/components/dnd-provider',
								},
								{
									text: 'DragPreviewImage',
									link: '/zh/guide/components/drag-preview-image',
								},
							],
						},
						{
							text: 'Composition API',
							link: '/zh/guide/composition/',
						},
					],
					'/zh/example/': [
						{
							text: '示例',
							children: [
								{
									text: '介绍',
									link: '/zh/guide/',
								},
								{
									text: '概述',
									link: '/zh/guide/overview',
								},
							],
						},
					],
				},
			},
			'/en/': {
				selectText: 'Languages',
				label: 'English',
				nav: [
					{ text: 'Home', link: '/', activeMatch: '^/$' },
					{
						text: 'Getting Started',
						link: '/en/guide/',
						activeMatch: '^/en/guide/',
					},
					{
						text: 'Example',
						link: '/en/example/',
						activeMatch: '^/en/example/',
					},
				],
				sidebar: 'auto',
			},
		},
	},
})
