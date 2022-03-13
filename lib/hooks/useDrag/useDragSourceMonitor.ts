import { DragSourceMonitorImpl } from '../../internals/index.js'
import type { DragSourceMonitor } from '../../types/index.js'
import { useDragDropManager } from '../useDragDropManager.js'
import { computed, ComputedRef } from 'vue'

// export function useDragSourceMonitor<O, R>(): DragSourceMonitor<O, R> {
// 	const manager = useDragDropManager()
// 	return useMemo<DragSourceMonitor<O, R>>(
// 		() => new DragSourceMonitorImpl(manager),
// 		[manager],
// 	)
// }

export function useDragSourceMonitor<O, R>(): ComputedRef<
	DragSourceMonitor<O, R>
> {
	const manager = useDragDropManager()

	return computed<DragSourceMonitor<O, R>>(
		() => new DragSourceMonitorImpl(manager)
	)
}
