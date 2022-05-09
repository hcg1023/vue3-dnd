import type { HandlerManager, MonitorEventEmitter } from '../types'
import { useCollector } from './useCollector.js'
import { Ref, unref, watchEffect } from 'vue-demi'
import { MaybeRef } from '../types/utils'

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
