import type { ConnectDragSource, ConnectDragPreview } from '../../types'
import type { DragSourceHookSpec, FactoryOrInstance } from '../types'
import { useRegisteredDragSource } from './useRegisteredDragSource'
import { useOptionalFactory } from '../useOptionalFactory'
import { useDragSourceMonitor } from './useDragSourceMonitor'
import { useDragSourceConnector } from './useDragSourceConnector'
import { useCollectedProps } from '../useCollectedProps'
import { useConnectDragPreview, useConnectDragSource } from './connectors'
import { invariant } from '@react-dnd/invariant'
import { computed, Ref, unref } from 'vue-demi'
import { DragPreviewOptions, DragSourceOptions } from '../../types'

/**
 * useDragSource hook
 * @param specArg The drag source specification (object or function, function preferred)
 */
export function useDrag<
	DragObject = unknown,
	DropResult = unknown,
	CollectedProps = unknown,
	ConnectDragSourceOptions extends DragSourceOptions = DragSourceOptions,
	ConnectDragPreviewOption extends DragPreviewOptions = DragPreviewOptions
>(
	specArg: FactoryOrInstance<
		DragSourceHookSpec<DragObject, DropResult, CollectedProps>
	>
): [
	Ref<CollectedProps>,
	Ref<ConnectDragSource<ConnectDragSourceOptions>>,
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
		useConnectDragSource(connector, spec),
		useConnectDragPreview(connector, spec),
	]
}
