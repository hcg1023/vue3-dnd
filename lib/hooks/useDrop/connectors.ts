import type { TargetConnector } from '../../internals'
import { MaybeRef } from '../../types/utils'
import { computed, unref } from 'vue'

export function useConnectDropTarget(connector: MaybeRef<TargetConnector>) {
	return computed(() => unref(connector).hooks.dropTarget())
}
