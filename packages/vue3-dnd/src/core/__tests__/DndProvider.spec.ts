import { createDragDropManager, DragDropManager } from 'dnd-core'
import { render, cleanup } from '@testing-library/vue'
import { useDndContextInjector } from '../DndContext'
import DndProvider from '../DndProvider'
import { TestBackend } from 'react-dnd-test-backend'
import { defineComponent, h } from 'vue'
import { describe, afterEach, it, expect } from 'vitest'

describe('DndProvider', () => {
	afterEach(cleanup)

	it('reuses DragDropManager provided to it', () => {
		let capturedManager
		const manager = createDragDropManager(TestBackend, {}, {})

		const ChildComponent = defineComponent(() => {
			capturedManager = useDndContextInjector()
			return () => null
		})
		const TestComponent = defineComponent(() => {
			return () =>
				h(DndProvider, { manager }, { default: () => h(ChildComponent) })
		})

		render(TestComponent)

		expect(capturedManager).toBe(manager)
	})

	it('stores DragDropManager in global context and cleans up on unmount', () => {
		let capturedManager

		const ChildComponent = defineComponent(() => {
			capturedManager = useDndContextInjector()
			return () => null
		})
		const TestProvider = defineComponent(() => {
			return () =>
				h(
					DndProvider,
					{ backend: TestBackend },
					{ default: () => h(ChildComponent) }
				)
		})

		const mountProvider = () => render(TestProvider)

		const globalInstance = (): DragDropManager =>
			(global as any)[Symbol.for('__VUE_DND_CONTEXT_INSTANCE__')] as any

		// Single mount & unmount works
		const root = mountProvider()
		expect(globalInstance()).toEqual(capturedManager)
		root.unmount()
		expect(globalInstance()).toEqual(null)

		// Two mounted components do a refcount
		const rootA = mountProvider()
		const rootB = mountProvider()
		expect(globalInstance()).toEqual(capturedManager)
		rootA.unmount()
		expect(globalInstance()).toEqual(capturedManager)
		rootB.unmount()
		expect(globalInstance()).toEqual(null)
	})
})
