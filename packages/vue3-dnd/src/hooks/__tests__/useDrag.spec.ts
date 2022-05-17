import { useDrag } from '../useDrag'
import { DndProvider } from '../../core'
import { TestBackend } from 'react-dnd-test-backend'
import { render, cleanup, RenderResult } from '@testing-library/vue'
import { defineComponent, h } from 'vue-demi'
import { describe, afterEach, it, vi, expect } from 'vitest'

describe('The useDrag hook', () => {
	afterEach(cleanup)

	it('throws if rendered outside of a React-DnD tree', () => {
		const Component = defineComponent(() => {
			const [, drag] = useDrag({
				type: 'box',
			})
			// @ts-ignore
			return () => h('div', { ref: drag })
		})

		const err = console.error
		try {
			const errorMock = vi.fn()
			console.error = errorMock
			expect(() => render(Component)).toThrow(/Expected drag drop context/)
		} finally {
			console.error = err
		}
	})

	it('throws if type is null', () => {
		const Component = defineComponent(() => {
			const [, drag] = useDrag({
				type: null as any,
			} as any)
			// @ts-ignore
			return () => h('div', { ref: drag })
		})
		const TestComponent = defineComponent(() => {
			return () =>
				h(
					DndProvider,
					{ backend: TestBackend },
					{ default: () => h(Component) }
				)
		})

		const err = console.error
		let testProviderComponent: RenderResult
		try {
			const errorMock = vi.fn()
			console.error = errorMock
			expect(() => {
				testProviderComponent = render(TestComponent)
				return testProviderComponent
			}).toThrow(/spec.type must be defined/)
		} finally {
			// @ts-ignore
			testProviderComponent?.unmount()
			console.error = err
		}
	})

	it('can be used inside of a React-DnD context', async () => {
		const Component = defineComponent(() => {
			const [, drag] = useDrag({
				type: 'box',
			})
			// @ts-ignore
			return () => h('div', { ref: drag, role: 'root' })
		})
		const TestComponent = defineComponent(() => {
			return () =>
				h(
					DndProvider,
					{ backend: TestBackend },
					{ default: () => h(Component) }
				)
		})

		const result = render(TestComponent)
		const root = await result.findByRole('root')
		expect(root).toBeDefined()
	})
})
