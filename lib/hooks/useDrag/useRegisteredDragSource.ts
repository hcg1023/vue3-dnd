import type { DragSourceMonitor } from '../../types'
import { registerSource, SourceConnector } from '../../internals'
import type { DragSourceHookSpec } from '../types.js'
import { useDragSource } from './useDragSource.js'
import { useDragDropManager } from '../useDragDropManager.js'
import { useDragType } from './useDragType.js'
import { Ref, unref, watchEffect } from 'vue'

// export function useRegisteredDragSource<O, R, P>(
// 	spec: DragSourceHookSpec<O, R, P>,
// 	monitor: DragSourceMonitor<O, R>,
// 	connector: SourceConnector
// ): void {
// 	const manager = useDragDropManager()
// 	const handler = useDragSource(spec, monitor, connector)
// 	const itemType = useDragType(spec)
//
// 	useIsomorphicLayoutEffect(
// 		function registerDragSource() {
// 			if (itemType != null) {
// 				const [handlerId, unregister] = registerSource(
// 					itemType,
// 					handler,
// 					manager
// 				)
// 				monitor.receiveHandlerId(handlerId)
// 				connector.receiveHandlerId(handlerId)
// 				return unregister
// 			}
// 			return
// 		},
// 		[manager, monitor, connector, handler, itemType]
// 	)
// }

export function useRegisteredDragSource<O, R, P>(
	spec: Ref<DragSourceHookSpec<O, R, P>>,
	monitor: Ref<DragSourceMonitor<O, R>>,
	connector: Ref<SourceConnector>
): void {
	const manager = useDragDropManager()
	const handler = useDragSource(spec, monitor, connector)
	const itemType = useDragType(spec)

	watchEffect(function registerDragSource(onCleanup) {
		if (unref(itemType) != null) {
			const [handlerId, unregister] = registerSource(
				unref(itemType),
				unref(handler),
				unref(manager)
			)
			unref(monitor).receiveHandlerId(handlerId)
			unref(connector).receiveHandlerId(handlerId)
			onCleanup(unregister)
		}
		return
	})
}
