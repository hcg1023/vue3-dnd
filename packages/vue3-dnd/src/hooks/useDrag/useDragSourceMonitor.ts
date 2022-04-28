import { DragSourceMonitorImpl } from '../../internals'
import type { DragSourceMonitor } from '../../types'
import { useDragDropManager } from '../useDragDropManager.js'
import { computed, ComputedRef, unref } from 'vue'

export function useDragSourceMonitor<O, R>(): ComputedRef<
	DragSourceMonitor<O, R>
> {
	const manager = useDragDropManager()

	return computed<DragSourceMonitor<O, R>>(
		() => new DragSourceMonitorImpl(unref(manager))
	)
}
