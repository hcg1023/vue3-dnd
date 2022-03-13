import type { HandlerManager, MonitorEventEmitter } from '../types'
import { useCollector } from './useCollector.js'
import { Ref, unref, watchEffect } from 'vue'
import { MaybeRef } from '../types/utils'

// export function useMonitorOutput<Monitor extends HandlerManager, Collected>(
// 	monitor: Monitor & MonitorEventEmitter,
// 	collect: (monitor: Monitor) => Collected,
// 	onCollect?: () => void,
// ): Collected {
// 	const [collected, updateCollected] = useCollector(monitor, collect, onCollect)
//
// 	useIsomorphicLayoutEffect(
// 		function subscribeToMonitorStateChange() {
// 			const handlerId = monitor.getHandlerId()
// 			if (handlerId == null) {
// 				return
// 			}
// 			return monitor.subscribeToStateChange(updateCollected, {
// 				handlerIds: [handlerId],
// 			})
// 		},
// 		[monitor, updateCollected],
// 	)
//
// 	return collected
// }

export function useMonitorOutput<Monitor extends HandlerManager, Collected>(
	monitor: MaybeRef<Monitor & MonitorEventEmitter>,
	collect: MaybeRef<(monitor: Monitor) => Collected>,
	onCollect?: () => void
): Ref<Collected> {
	const [collected, updateCollected] = useCollector(monitor, collect, onCollect)

	watchEffect(function subscribeToMonitorStateChange(onCleanup) {
		const handlerId = unref(monitor).getHandlerId()
		if (handlerId == null) {
			return
		}
		onCleanup(
			unref(monitor).subscribeToStateChange(updateCollected, {
				handlerIds: [handlerId],
			})
		)
	})

	return collected
}
