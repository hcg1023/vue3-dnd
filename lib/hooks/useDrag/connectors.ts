import type { SourceConnector } from '../../internals'
import { computed, unref } from 'vue'
import { MaybeRef } from '../../types/utils'

export function useConnectDragSource(connector: MaybeRef<SourceConnector>) {
	return computed(() => unref(connector).hooks.dragSource())
}

export function useConnectDragPreview(connector: MaybeRef<SourceConnector>) {
	return computed(() => unref(connector).hooks.dragPreview())
}
