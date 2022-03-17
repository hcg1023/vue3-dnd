import { MaybeRef } from '../types/utils'
import { Connector } from '../internals'
import { ConnectNode } from '../types'
import { isRef, unref, watch } from 'vue'

export function connectDragRef<Options>(
	connector: MaybeRef<Connector>,
	fn: ConnectNode<Options>
) {
	return (elementOrNode: any, options?: Options) => {
		if (isRef(elementOrNode)) {
			const stop = watch(elementOrNode, val => {
				debugger
				unref(connector).reconnect()
				if (val === null) {
					stop()
				}
			})
		}
		return fn(elementOrNode, options)
	}
}
