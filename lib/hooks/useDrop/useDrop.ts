import type { ConnectDropTarget } from '../../types'
import type { DropTargetHookSpec, FactoryOrInstance } from '../types.js'
import { useRegisteredDropTarget } from './useRegisteredDropTarget.js'
import { useOptionalFactory } from '../useOptionalFactory.js'
import { useDropTargetMonitor } from './useDropTargetMonitor.js'
import { useDropTargetConnector } from './useDropTargetConnector.js'
import { useCollectedProps } from '../useCollectedProps.js'
import { useConnectDropTarget } from './connectors.js'
import { computed, Ref, unref } from 'vue'

/**
 * useDropTarget Hook
 * @param specArg The drop target specification (object or function, function preferred)
 */
export function useDrop<
	DragObject = unknown,
	DropResult = unknown,
	CollectedProps = unknown
>(
	specArg: FactoryOrInstance<
		DropTargetHookSpec<DragObject, DropResult, CollectedProps>
	>
): [Ref<CollectedProps>, Ref<ConnectDropTarget>] {
	const spec = useOptionalFactory(specArg)
	const monitor = useDropTargetMonitor<DragObject, DropResult>()
	const connector = useDropTargetConnector(computed(() => unref(spec).options))
	useRegisteredDropTarget(spec, monitor, connector)

	return [
		useCollectedProps(
			computed(() => unref(spec).collect || (() => ({} as any))),
			monitor,
			connector
		),
		useConnectDropTarget(connector),
	]
}
