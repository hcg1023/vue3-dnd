import { isValidElement, isVueSkipInstance } from './utils'

function throwIfCompositeComponentElement() {
	// Custom components can no longer be wrapped directly in Vue Dnd

	throw new Error(
		'Only native element nodes can now be passed to Vue DnD connectors.' +
			`You can either wrap Component into a <div>, or turn it into a ` +
			'drag source or a drop target itself.'
	)
}

function wrapHookToRecognizeElement(hook: (node: any, options: any) => void) {
	return (elementOrNode = null, options = null) => {
		if (isVueSkipInstance(elementOrNode)) {
			throwIfCompositeComponentElement()
		}
		// When passed a node, call the hook straight away.
		if (!isValidElement(elementOrNode)) {
			const node = elementOrNode
			hook(node, options)
			// return the node so it can be chained (e.g. when within callback refs
			// <div ref={node => connectDragSource(connectDropTarget(node))}/>
			return node
		}
	}
}

export function wrapConnectorHooks(hooks: any) {
	const wrappedHooks: any = {}

	Object.keys(hooks).forEach(key => {
		const hook = hooks[key]

		// ref objects should be passed straight through without wrapping
		if (key.endsWith('Ref')) {
			wrappedHooks[key] = hooks[key]
		} else {
			const wrappedHook = wrapHookToRecognizeElement(hook)
			wrappedHooks[key] = () => wrappedHook
		}
	})

	return wrappedHooks
}
