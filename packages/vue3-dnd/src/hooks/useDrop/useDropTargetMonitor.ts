import { DropTargetMonitorImpl } from '../../internals'
import type { DropTargetMonitor } from '../../types'
import { useDragDropManager } from '../useDragDropManager'
import { computed, ComputedRef, unref } from 'vue-demi'

export function useDropTargetMonitor<O, R>(): ComputedRef<
	DropTargetMonitor<O, R>
> {
	const manager = useDragDropManager()
	return computed(() => new DropTargetMonitorImpl(unref(manager)))
}
