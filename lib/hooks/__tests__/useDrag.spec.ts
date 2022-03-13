import { useDrag } from '../useDrag'
import { DndProvider } from '../../core'
import { TestBackend } from 'react-dnd-test-backend'
import { render, cleanup, RenderResult } from '@testing-library/vue'
import { defineComponent, h } from 'vue'

describe('The useDrag hook', () => {
	afterEach(cleanup)

	it('throws if rendered outside of a React-DnD tree', () => {
		const Component = defineComponent(() => {
			const [, drag] = useDrag({
				type: 'box',
			})
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

	it('throws if "begin" is defined', () => {
		const Component = defineComponent(() => {
			const [, drag] = useDrag({
				type: 'box',
				begin() {
					return { id: 1 }
				},
			} as any)
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
			}).toThrow(
				'useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)'
			)
		} finally {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			testProviderComponent?.unmount()
			console.error = err
		}
	})

	it('throws if type is null', () => {
		const Component = defineComponent(() => {
			const [, drag] = useDrag({
				type: null as any,
			} as any)
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
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
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
