import { SourceConnector } from '../../internals'
import type { DragPreviewOptions, DragSourceOptions } from '../../types'
import { useDragDropManager } from '../useDragDropManager'
import { computed, ComputedRef, Ref, unref, watchEffect } from 'vue-demi'

export function useDragSourceConnector(
  dragSourceOptions: Ref<DragSourceOptions | undefined>,
  dragPreviewOptions: Ref<DragPreviewOptions | undefined>
): ComputedRef<SourceConnector> {
  const manager = useDragDropManager()

  const connector = computed<SourceConnector>(
    () => new SourceConnector(unref(manager).getBackend())
  )
  watchEffect(onCleanup => {
    connector.value.dragSourceOptions = unref(dragSourceOptions) || null
    unref(connector).reconnect()
    onCleanup(() => {
      connector.value.disconnectDragSource()
    })
  })
  watchEffect(onCleanup => {
    connector.value.dragPreviewOptions = unref(dragPreviewOptions) || null
    unref(connector).reconnect()
    onCleanup(() => {
      connector.value.disconnectDragPreview()
    })
  })

  return connector
}
