import { Connector } from '../internals'
import { ConnectableElement, ConnectNode } from '../types'
import { isRef, watch } from 'vue'

export function connectDragRef<ConnectorNode extends Connector, Options>(
	fn: ConnectNode<Options>,
	options?: Options
) {
	const scopedOptions = options
	let prevWatchStop: ReturnType<typeof watch>
	return (elementOrNode: ConnectableElement, options?: Options) => {
		function callConnect() {
			return fn(
				elementOrNode,
				// Because of the special nature of vue, when it calls setRef, it will pass in two parameters. Therefore, when we pass connect as a setRef function, we may receive a non-ideal options. For this reason, we assume that when there are options in the spec, The options passed in by Connect are no longer adopted to ensure that the options of spec always take precedence over the options of connect
				scopedOptions || options
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
