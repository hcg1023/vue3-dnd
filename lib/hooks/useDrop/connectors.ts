import type { TargetConnector } from '../../internals'
import { MaybeRef } from '../../types/utils'
import { computed, unref } from 'vue'
import { connectDragRef } from '../connectDragRef'

export function useConnectDropTarget(connector: MaybeRef<TargetConnector>) {
	return computed(() =>
		connectDragRef(connector, unref(connector).hooks.dropTarget())
	)
}
