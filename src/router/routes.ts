import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
	{
		path: '/example',
		name: 'Example',
		component: () => import('../views/Example.vue'),
	},
	{
		path: '/dustbin/single-target',
		name: 'SingleTarget',
		component: () => import('../examples/00-chessboard/dustbin/single-target'),
	},
	{
		path: '/dustbin/copy-or-move',
		name: 'CopyOrMove',
		component: () => import('../examples/00-chessboard/dustbin/copy-or-move'),
	},
	{
		path: '/dustbin/multiple-targets',
		name: 'MultipleTargets',
		component: () =>
			import('../examples/00-chessboard/dustbin/multiple-targets'),
	},
	{
		path: '/drag-around/naive',
		name: 'Naive',
		component: () => import('../examples/02-drag-around/naive'),
	},
	{
		path: '/drag-around/custom-drag-layer',
		name: 'CustomDragLayer',
		component: () => import('../examples/02-drag-around/custom-drag-layer'),
	},
]
