import type { Connector } from '../internals/index.js'
import type { HandlerManager, MonitorEventEmitter } from '../types/index.js'
import { useMonitorOutput } from './useMonitorOutput.js'
import { Ref, unref } from 'vue'
import { MaybeRef } from '../types/utils'

// export function useCollectedProps<Collected, Monitor extends HandlerManager>(
// 	collector: ((monitor: Monitor) => Collected) | undefined,
// 	monitor: Monitor & MonitorEventEmitter,
// 	connector: Connector,
// ) {
// 	return useMonitorOutput(monitor, collector || (() => ({} as Collected)), () =>
// 		connector.reconnect(),
// 	)
// }

export function useCollectedProps<Collected, Monitor extends HandlerManager>(
	collector: MaybeRef<(monitor: Monitor) => Collected> | undefined,
	monitor: MaybeRef<Monitor & MonitorEventEmitter>,
	connector: MaybeRef<Connector>
) {
	const defaultCollector = () => ({} as Collected)
	return useMonitorOutput(monitor, collector || defaultCollector, () =>
		unref(connector).reconnect()
	)
}
