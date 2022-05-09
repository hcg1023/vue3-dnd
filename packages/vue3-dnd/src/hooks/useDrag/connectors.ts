import type { SourceConnector } from '../../internals'
import { computed, Ref, unref } from 'vue-demi'
import { MaybeRef } from '../../types/utils'
import { connectDragRef } from '../connectDragRef'
import { DragSourceHookSpec } from '../types'

export function useConnectDragSource<O, R, P>(
	connector: MaybeRef<SourceConnector>,
	spec: Ref<DragSourceHookSpec<O, R, P>>
) {
	return computed(() =>
		connectDragRef(unref(connector).hooks.dragSource(), unref(spec).options)
	)
}

export function useConnectDragPreview<O, R, P>(
	connector: MaybeRef<SourceConnector>,
	spec: Ref<DragSourceHookSpec<O, R, P>>
) {
	return computed(() =>
		connectDragRef(
			unref(connector).hooks.dragPreview(),
			unref(spec).previewOptions
		)
	)
}
