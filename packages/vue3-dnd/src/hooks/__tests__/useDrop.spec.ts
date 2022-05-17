import { useDrop } from '../useDrop'
import { render, cleanup } from '@testing-library/vue'
import { DndProvider } from '../..'
import { TestBackend } from 'react-dnd-test-backend'
import { defineComponent, h } from 'vue-demi'
import { describe, afterEach, it, vi, expect } from 'vitest'

describe('The useDrop hook', () => {
	afterEach(cleanup)

	it('throws if rendered outside of a React-DnD tree', () => {
		const Component = defineComponent(() => {
			const [, drag] = useDrop(() => ({
				accept: 'box',
			}))
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

	it('throws if accept is null', () => {
		const Component = defineComponent(() => {
			const [, drag] = useDrop(
				() =>
					({
						accept: null,
					} as any)
			)
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
		try {
			const errorMock = vi.fn()
			console.error = errorMock
			expect(() => render(TestComponent)).toThrow(/accept must be defined/)
		} finally {
			console.error = err
		}
	})

	it('can be used inside of a React-DnD context', async () => {
		const Component = defineComponent(() => {
			const [, drag] = useDrop(() => ({
				accept: 'box',
			}))
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
