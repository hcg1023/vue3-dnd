import type { TargetConnector } from '../../internals'
import { MaybeRef } from '../../types/utils'
import { computed, unref } from 'vue-demi'
import { useConnector } from '../connectDragRef'
import { DropTargetHookSpec } from '../types'
import { DropTargetOptions } from '../../types'

export function useConnectDropTarget<O, R, P>(
	connector: MaybeRef<TargetConnector>,
	spec: MaybeRef<DropTargetHookSpec<O, R, P>>
) {
	return useConnector<DropTargetOptions>(
		state => {
			unref(connector).hooks.dropTarget()(state.el, state.options)
		},
		computed(() => unref(spec).options)
	)
}
