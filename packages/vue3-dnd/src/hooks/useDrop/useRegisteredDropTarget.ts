import { registerTarget, TargetConnector } from '../../internals'
import type { DropTargetMonitor } from '../../types'
import type { DropTargetHookSpec } from '../types'
import { useDragDropManager } from '../useDragDropManager'
import { useAccept } from './useAccept'
import { useDropTarget } from './useDropTarget'
import { unref, watchEffect } from 'vue-demi'
import { MaybeRef } from '../../types/utils'

export function useRegisteredDropTarget<O, R, P>(
  spec: MaybeRef<DropTargetHookSpec<O, R, P>>,
  monitor: MaybeRef<DropTargetMonitor<O, R>>,
  connector: MaybeRef<TargetConnector>
): void {
  const manager = useDragDropManager()
  const dropTarget = useDropTarget(spec, monitor)
  const accept = useAccept(spec)

  watchEffect(function registerDropTarget(onCleanup) {
    const [handlerId, unregister] = registerTarget(accept, dropTarget, manager)
    unref(monitor).receiveHandlerId(handlerId)
    unref(connector).receiveHandlerId(handlerId)
    onCleanup(unregister)
  })
}
