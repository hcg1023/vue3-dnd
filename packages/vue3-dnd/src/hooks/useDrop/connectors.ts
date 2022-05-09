import type { TargetConnector } from '../../internals'
import { MaybeRef } from '../../types/utils'
import { computed, unref } from 'vue-demi'
import { connectDragRef } from '../connectDragRef'
import { DropTargetHookSpec } from '../types'

export function useConnectDropTarget<O, R, P>(
	connector: MaybeRef<TargetConnector>,
	spec: MaybeRef<DropTargetHookSpec<O, R, P>>
) {
	return computed(() =>
		connectDragRef(unref(connector).hooks.dropTarget(), unref(spec).options)
	)
}
