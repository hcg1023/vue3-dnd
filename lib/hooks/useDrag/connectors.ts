import type { SourceConnector } from '../../internals'
import { computed, unref } from 'vue'
import { MaybeRef } from '../../types/utils'
import { connectDragRef } from '../connectDragRef'

export function useConnectDragSource(connector: MaybeRef<SourceConnector>) {
	return computed(() =>
		connectDragRef(connector, unref(connector).hooks.dragSource())
	)
}

export function useConnectDragPreview(connector: MaybeRef<SourceConnector>) {
	return computed(() =>
		connectDragRef(connector, unref(connector).hooks.dragPreview())
	)
}
