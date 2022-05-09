import { ConnectableElement, ConnectNode } from '../types'
import { isRef, watch } from 'vue-demi'

export function connectDragRef<Options>(
	fn: ConnectNode<Options>,
	options?: Options
) {
	const scopedOptions = options
	let prevWatchStop: ReturnType<typeof watch>
	let prevNode: ConnectableElement | undefined
	let prevOptions: Options | undefined
	return (elementOrNode: ConnectableElement, options?: Options) => {
		function callConnect() {
			const nowOptions = scopedOptions || options
			// Avoid repeatedly triggering the connect function when vue patch calls setRef due to data changes in the drag process
			if (!isRef(elementOrNode)) {
				if (prevNode === elementOrNode && prevOptions === nowOptions) {
					return elementOrNode!
				}
				prevNode = elementOrNode
				prevOptions = nowOptions
			}
			return fn(
				elementOrNode,
				// Because of the special nature of vue, when it calls setRef, it will pass in two parameters. Therefore, when we pass connect as a setRef function, we may receive a non-ideal options. For this reason, we assume that when there are options in the spec, The options passed in by Connect are no longer adopted to ensure that the options of spec always take precedence over the options of connect
				nowOptions
			)
		}

		if (isRef(elementOrNode)) {
			if (prevWatchStop) {
				prevWatchStop()
			}
			prevWatchStop = watch(elementOrNode, callConnect)
		}
		return callConnect()
	}
}
