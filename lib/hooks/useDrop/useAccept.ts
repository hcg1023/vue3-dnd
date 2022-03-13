import { invariant } from '@react-dnd/invariant'
import type { Identifier } from 'dnd-core'
import type { DropTargetHookSpec } from '../types.js'
import { MaybeRef } from '../../types/utils'
import { computed, ComputedRef, unref } from 'vue'

/**
 * Internal utility hook to get an array-version of spec.accept.
 * The main utility here is that we aren't creating a new array on every render if a non-array spec.accept is passed in.
 * @param spec
 */
// export function useAccept<O, R, P>(
// 	spec: DropTargetHookSpec<O, R, P>
// ): Identifier[] {
// 	const { accept } = spec
// 	return useMemo(() => {
// 		invariant(spec.accept != null, 'accept must be defined')
// 		return Array.isArray(accept) ? accept : [accept]
// 	}, [accept])
// }

export function useAccept<O, R, P>(
	spec: MaybeRef<DropTargetHookSpec<O, R, P>>
): ComputedRef<Identifier[]> {
	return computed(() => {
		const accept = unref(spec).accept
		invariant(accept != null, 'accept must be defined')
		return Array.isArray(accept) ? accept : [accept]
	})
}
