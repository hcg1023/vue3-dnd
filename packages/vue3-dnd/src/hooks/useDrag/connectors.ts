import type { SourceConnector } from '../../internals'
import { computed, Ref, unref } from 'vue-demi'
import { MaybeRef } from '../../types/utils'
import { useConnector } from '../useConnector'
import { DragSourceHookSpec } from '../types'
import { DragPreviewOptions, DragSourceOptions } from '../../types'

export function useConnectDragSource<O, R, P>(
	connector: MaybeRef<SourceConnector>,
	spec: Ref<DragSourceHookSpec<O, R, P>>
) {
	return useConnector<DragSourceOptions>(
		state => {
			unref(connector).hooks.dragSource()(state.el, state.options)
		},
		computed(() => unref(spec).options)
	)
}

export function useConnectDragPreview<O, R, P>(
	connector: MaybeRef<SourceConnector>,
	spec: Ref<DragSourceHookSpec<O, R, P>>
) {
	return useConnector<DragPreviewOptions>(
		state => {
			unref(connector).hooks.dragPreview()(state.el, state.options)
		},
		computed(() => unref(spec).previewOptions)
	)
}
