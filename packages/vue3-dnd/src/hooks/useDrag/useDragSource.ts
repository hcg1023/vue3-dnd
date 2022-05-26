import type { Connector } from '../../internals'
import type { DragSourceMonitor } from '../../types'
import type { DragSourceHookSpec } from '../types'
import { DragSourceImpl } from './DragSourceImpl'
import { computed, Ref, unref, watchEffect } from 'vue-demi'

export function useDragSource<O, R, P>(
  spec: Ref<DragSourceHookSpec<O, R, P>>,
  monitor: Ref<DragSourceMonitor<O, R>>,
  connector: Ref<Connector>
) {
  const handler = computed(
    () => new DragSourceImpl(unref(spec), unref(monitor), unref(connector))
  )

  watchEffect(() => {
    handler.value.spec = unref(spec)
  })
  return handler
}
