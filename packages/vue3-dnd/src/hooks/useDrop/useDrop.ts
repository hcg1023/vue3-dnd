import type { ConnectDropTarget } from '../../types'
import type { DropTargetHookSpec, FactoryOrInstance } from '../types.js'
import { useRegisteredDropTarget } from './useRegisteredDropTarget.js'
import { useOptionalFactory } from '../useOptionalFactory.js'
import { useDropTargetMonitor } from './useDropTargetMonitor.js'
import { useDropTargetConnector } from './useDropTargetConnector.js'
import { useCollectedProps } from '../useCollectedProps'
import { useConnectDropTarget } from './connectors'
import { computed, Ref, unref } from 'vue-demi'
import { DropTargetOptions } from '../../types'

/**
 * useDropTarget Hook
 * @param specArg The drop target specification (object or function, function preferred)
 */
export function useDrop<
	DragObject = unknown,
	DropResult = unknown,
	CollectedProps = unknown,
	ConnectDropTargetOptions extends DropTargetOptions = DropTargetOptions
>(
	specArg: FactoryOrInstance<
		DropTargetHookSpec<DragObject, DropResult, CollectedProps>
	>
): [Ref<CollectedProps>, Ref<ConnectDropTarget<ConnectDropTargetOptions>>] {
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
		useConnectDropTarget(connector, spec),
	]
}
