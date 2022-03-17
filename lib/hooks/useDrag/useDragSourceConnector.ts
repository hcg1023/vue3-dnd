import { SourceConnector } from '../../internals'
import type { DragPreviewOptions, DragSourceOptions } from '../../types'
import { useDragDropManager } from '../useDragDropManager.js'
import { computed, ComputedRef, Ref, unref, watchEffect } from 'vue'

export function useDragSourceConnector(
	dragSourceOptions: Ref<DragSourceOptions | undefined>,
	dragPreviewOptions: Ref<DragPreviewOptions | undefined>
): ComputedRef<SourceConnector> {
	const manager = useDragDropManager()

	const connector = computed<SourceConnector>(
		() => new SourceConnector(unref(manager).getBackend())
	)
	watchEffect(
		onCleanup => {
			debugger
			connector.value.dragSourceOptions = unref(dragSourceOptions) || null
			debugger
			unref(connector).reconnect()
			onCleanup(() => {
				connector.value.disconnectDragSource()
			})
		},
		{ flush: 'post' }
	)
	watchEffect(
		onCleanup => {
			connector.value.dragPreviewOptions = unref(dragPreviewOptions) || null
			unref(connector).reconnect()
			onCleanup(() => {
				connector.value.disconnectDragPreview()
			})
		},
		{ flush: 'post' }
	)

	return connector
}
