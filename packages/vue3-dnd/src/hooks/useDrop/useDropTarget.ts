import type { DropTargetMonitor } from '../../types'
import type { DropTargetHookSpec } from '../types'
import { DropTargetImpl } from './DropTargetImpl'
import { MaybeRef } from '../../types/utils'
import { computed, unref, watchEffect } from 'vue-demi'

export function useDropTarget<O, R, P>(
  spec: MaybeRef<DropTargetHookSpec<O, R, P>>,
  monitor: MaybeRef<DropTargetMonitor<O, R>>
) {
  const dropTarget = computed(
    () => new DropTargetImpl(unref(spec), unref(monitor))
  )
  watchEffect(() => {
    dropTarget.value.spec = unref(spec)
  })
  return dropTarget
}
