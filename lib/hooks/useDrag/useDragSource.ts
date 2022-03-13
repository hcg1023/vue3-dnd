import type { Connector } from '../../internals/index.js'
import type { DragSourceMonitor } from '../../types/index.js'
import type { DragSourceHookSpec } from '../types.js'
import { DragSourceImpl } from './DragSourceImpl.js'
import { computed, Ref, unref, watchEffect } from 'vue'

export function useDragSource<O, R, P>(
	spec: Ref<DragSourceHookSpec<O, R, P>>,
	monitor: Ref<DragSourceMonitor<O, R>>,
	connector: Ref<Connector>
) {
	const handler = computed(
		() => new DragSourceImpl(unref(spec), unref(monitor), unref(connector))
	)

	watchEffect(() => {
		handler.value.spec = unref(spec)
	})
	return handler
}
