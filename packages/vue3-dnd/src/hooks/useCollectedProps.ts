import type { Connector } from '../internals'
import type { HandlerManager, MonitorEventEmitter } from '../types'
import { useMonitorOutput } from './useMonitorOutput.js'
import { Ref, unref } from 'vue'
import { MaybeRef } from '../types/utils'

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
