import { ConnectableElement, ConnectNode } from '../types'
import { isRef, reactive, Ref, set, unref, watch, watchEffect } from 'vue-demi'
import { MaybeRef } from '../types/utils'

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

interface ConnectorState<O> {
	el: Element | null
	options: O | undefined
}

export function useConnector<Options>(
	callback: (state: ConnectorState<Options>) => void,
	defaultOptions: Ref<Options | undefined>
) {
	const _state = reactive<ConnectorState<Options>>({
		el: null,
		options: unref(defaultOptions),
	})

	watchEffect(() => {
		callback(_state as ConnectorState<Options>)
	})

	function connector(
		element: MaybeRef<Element | null>,
		options: MaybeRef<Options | undefined> = unref(defaultOptions)
	) {
		set(_state, 'el', element)
		set(_state, 'options', options)
		return unref(element)
	}

	return connector
}
