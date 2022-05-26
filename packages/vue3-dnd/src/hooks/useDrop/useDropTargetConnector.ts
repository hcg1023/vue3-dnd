import { TargetConnector } from '../../internals'
import type { DropTargetOptions } from '../../types'
import { useDragDropManager } from '../useDragDropManager'
import { computed, Ref, unref, watchEffect } from 'vue-demi'
import { MaybeRef } from '../../types/utils'

export function useDropTargetConnector(
  options: MaybeRef<DropTargetOptions>
): Ref<TargetConnector> {
  const manager = useDragDropManager()
  const connector = computed(
    () => new TargetConnector(unref(manager).getBackend())
  )
  watchEffect(onCleanup => {
    connector.value.dropTargetOptions = unref(options) || null
    connector.value.reconnect()
    onCleanup(() => connector.value.disconnectDropTarget())
  })

  return connector
}
