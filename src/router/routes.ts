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
		component: () => import('../examples/01-chessboard/dustbin/single-target'),
	},
	{
		path: '/dustbin/copy-or-move',
		name: 'CopyOrMove',
		component: () => import('../examples/01-chessboard/dustbin/copy-or-move'),
	},
	{
		path: '/dustbin/multiple-targets',
		name: 'MultipleTargets',
		component: () =>
			import('../examples/01-chessboard/dustbin/multiple-targets'),
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
	{
		path: '/nesting/drag-sources',
		name: 'DragSources',
		component: () => import('../examples/03-nesting/drag-sources'),
	},
	{
		path: '/nesting/drop-targets',
		name: 'DropTargets',
		component: () => import('../examples/03-nesting/drop-targets'),
	},
	{
		path: '/sortable/simple',
		name: 'Simple',
		component: () => import('../examples/04-sortable/simple'),
	},
	{
		path: '/sortable/cancel-on-drop-outside',
		name: 'CancelOnDropOutside',
		component: () => import('../examples/04-sortable/cancel-on-drop-outside'),
	},
]
