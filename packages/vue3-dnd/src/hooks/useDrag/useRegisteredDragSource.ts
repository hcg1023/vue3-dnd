import type { DragSourceMonitor } from '../../types'
import { registerSource, SourceConnector } from '../../internals'
import type { DragSourceHookSpec } from '../types'
import { useDragSource } from './useDragSource'
import { useDragDropManager } from '../useDragDropManager'
import { useDragType } from './useDragType'
import { Ref, unref, watchEffect } from 'vue-demi'

export function useRegisteredDragSource<O, R, P>(
  spec: Ref<DragSourceHookSpec<O, R, P>>,
  monitor: Ref<DragSourceMonitor<O, R>>,
  connector: Ref<SourceConnector>
): void {
  const manager = useDragDropManager()
  const handler = useDragSource(spec, monitor, connector)
  const itemType = useDragType(spec)

  watchEffect(function registerDragSource(onCleanup) {
    if (unref(itemType) != null) {
      const [handlerId, unregister] = registerSource(
        unref(itemType),
        unref(handler),
        unref(manager)
      )
      unref(monitor).receiveHandlerId(handlerId)
      unref(connector).receiveHandlerId(handlerId)
      onCleanup(unregister)
    }
    return
  })
}
