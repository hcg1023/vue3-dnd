<script lang="ts">
import { defineComponent, onUnmounted, PropType } from 'vue'
import { useDndContextProvider } from './DndContext'
import {
	BackendFactory,
	DragDropManager,
	createDragDropManager,
} from 'dnd-core'

type DndProviderProps<BackendContext, BackendOptions> =
	| {
			manager: DragDropManager
	  }
	| {
			backend: BackendFactory
			context?: BackendContext
			options?: BackendOptions
			debugMode?: boolean
	  }

let refCount = 0
const INSTANCE_SYM = Symbol.for('__VUE_DND_CONTEXT_INSTANCE__')

function isManagerProps(props: any): props is { manager: DragDropManager } {
	return 'manager' in props && props.manager
}

function getDndContextValue(props: DndProviderProps<unknown, unknown>) {
	if (isManagerProps(props)) {
		const manager = props.manager
		return [manager, false]
	}

	const manager = createSingletonDndContext(
		props.backend,
		props.context,
		props.options,
		props.debugMode
	)
	const isGlobalInstance = !props.context

	return [manager, isGlobalInstance]
}

function createSingletonDndContext<BackendContext, BackendOptions>(
	backend: BackendFactory,
	context: BackendContext = getGlobalContext(),
	options: BackendOptions,
	debugMode?: boolean
) {
	const ctx = context as any
	if (!ctx[INSTANCE_SYM]) {
		ctx[INSTANCE_SYM] = createDragDropManager(
			backend,
			context,
			options,
			debugMode
		)
	}
	return ctx[INSTANCE_SYM]
}

declare const globalThis: any
declare const global: any

function getGlobalContext() {
	return typeof globalThis !== 'undefined'
		? globalThis
		: typeof global !== 'undefined'
		? global
		: (window as any)
}

export default defineComponent({
	name: 'DndProvider',
	props: {
		manager: {
			type: Object as PropType<DragDropManager>,
		},
		backend: {
			type: Function as PropType<BackendFactory>,
		},
		context: {
			type: Object as PropType<unknown>,
		},
		options: {
			type: Object as PropType<unknown>,
		},
		debugMode: {
			type: Boolean,
		},
	},
	setup(props, { slots }) {
		const [manager, isGlobalInstance] = getDndContextValue(
			props as DndProviderProps<unknown, unknown>
		)
		if (isGlobalInstance) {
			++refCount
		}
		onUnmounted(() => {
			if (isGlobalInstance) {
				const context = getGlobalContext()
				if (--refCount === 0) {
					context[INSTANCE_SYM] = null
				}
			}
		})
		useDndContextProvider(manager)

		return () => slots.default?.() ?? null
	},
})
</script>
