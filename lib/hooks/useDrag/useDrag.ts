import type { ConnectDragSource, ConnectDragPreview } from '../../types'
import type { DragSourceHookSpec, FactoryOrInstance } from '../types.js'
import { useRegisteredDragSource } from './useRegisteredDragSource.js'
import { useOptionalFactory } from '../useOptionalFactory.js'
import { useDragSourceMonitor } from './useDragSourceMonitor.js'
import { useDragSourceConnector } from './useDragSourceConnector.js'
import { useCollectedProps } from '../useCollectedProps.js'
import { useConnectDragPreview, useConnectDragSource } from './connectors.js'
import { invariant } from '@react-dnd/invariant'
import { computed, Ref, unref } from 'vue'

/**
 * useDragSource hook
 * @param specArg The drag source specification (object or function, function preferred)
 */
export function useDrag<
	DragObject = unknown,
	DropResult = unknown,
	CollectedProps = unknown,
	ConnectDragPreviewOption = unknown
>(
	specArg: FactoryOrInstance<
		DragSourceHookSpec<DragObject, DropResult, CollectedProps>
	>
): [
	Ref<CollectedProps>,
	Ref<ConnectDragSource>,
	Ref<ConnectDragPreview<ConnectDragPreviewOption>>
] {
	const spec = useOptionalFactory(specArg)

	invariant(
		!(unref(spec) as any).begin,
		`useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)`
	)

	const monitor = useDragSourceMonitor<DragObject, DropResult>()

	const connector = useDragSourceConnector(
		computed(() => unref(spec).options),
		computed(() => unref(spec).previewOptions)
	)
	useRegisteredDragSource(spec, monitor, connector)

	return [
		useCollectedProps(
			computed(() => unref(spec).collect || (() => ({} as any))),
			monitor,
			connector
		),
		useConnectDragSource(connector),
		useConnectDragPreview(connector),
	]
}
