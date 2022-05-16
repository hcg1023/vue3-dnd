import { reactive, Ref, set, unref, watchEffect } from 'vue-demi'
import { MaybeRef } from '../types/utils'
import equal from 'fast-deep-equal'

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

	watchEffect(
		() => {
			callback(_state as ConnectorState<Options>)
		},
		{ flush: 'post' }
	)

	function connector(
		element: MaybeRef<Element | null>,
		options: MaybeRef<Options | undefined>
	) {
		set(_state, 'el', element)
		// Because of the special nature of vue, when it calls setRef, it will pass in two parameters. Therefore, when we pass connect as a setRef function, we may receive a non-ideal options. For this reason, we assume that when there are options in the spec, The options passed in by Connect are no longer adopted to ensure that the options of spec always take precedence over the options of connect
		const _options = unref(defaultOptions) || options
		if (!equal(_state.options, _options)) {
			set(_state, 'options', _options)
		}
		return unref(element)
	}

	return connector
}
