import { DropTargetMonitorImpl } from '../../internals'
import type { DropTargetMonitor } from '../../types'
import { useDragDropManager } from '../useDragDropManager.js'
import { computed, ComputedRef, unref } from 'vue'

export function useDropTargetMonitor<O, R>(): ComputedRef<
	DropTargetMonitor<O, R>
> {
	const manager = useDragDropManager()
	return computed(() => new DropTargetMonitorImpl(unref(manager)))
}
