import { registerTarget, TargetConnector } from '../../internals/index.js'
import type { DropTargetMonitor } from '../../types/index.js'
import type { DropTargetHookSpec } from '../types.js'
import { useDragDropManager } from '../useDragDropManager.js'
import { useAccept } from './useAccept.js'
import { useDropTarget } from './useDropTarget.js'
import { unref, watchEffect } from 'vue'
import { MaybeRef } from '../../types/utils'

export function useRegisteredDropTarget<O, R, P>(
	spec: MaybeRef<DropTargetHookSpec<O, R, P>>,
	monitor: MaybeRef<DropTargetMonitor<O, R>>,
	connector: MaybeRef<TargetConnector>
): void {
	const manager = useDragDropManager()
	const dropTarget = useDropTarget(spec, monitor)
	const accept = useAccept(spec)

	watchEffect(function registerDropTarget(onCleanup) {
		const [handlerId, unregister] = registerTarget(accept, dropTarget, manager)
		unref(monitor).receiveHandlerId(handlerId)
		unref(connector).receiveHandlerId(handlerId)
		onCleanup(unregister)
	})
}
