import type { DragLayerMonitor } from '../types'
import { useDragDropManager } from './useDragDropManager.js'
import { useCollector } from './useCollector.js'
import { computed, Ref, unref, watchEffect } from 'vue-demi'

/**
 * useDragLayer Hook
 * @param collector The property collector
 */
export function useDragLayer<CollectedProps, DragObject = any>(
	collect: (monitor: DragLayerMonitor<DragObject>) => CollectedProps
): Ref<CollectedProps> {
	const dragDropManager = useDragDropManager()
	const monitor = computed(() => unref(dragDropManager).getMonitor())
	const [collected, updateCollected] = useCollector(monitor, collect)

	watchEffect(onCleanup => {
		onCleanup(monitor.value.subscribeToOffsetChange(updateCollected))
	})
	watchEffect(onCleanup => {
		onCleanup(monitor.value.subscribeToStateChange(updateCollected))
	})

	return collected
}
