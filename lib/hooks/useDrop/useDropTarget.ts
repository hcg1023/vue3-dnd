import type { DropTargetMonitor } from '../../types/index.js'
import type { DropTargetHookSpec } from '../types.js'
import { DropTargetImpl } from './DropTargetImpl.js'
import { MaybeRef } from '../../types/utils'
import { computed, unref, watchEffect } from 'vue'

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
