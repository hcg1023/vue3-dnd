import { render, cleanup, fireEvent } from '@testing-library/vue'
import { useDrag } from '../useDrag'
import { useDragLayer } from '../useDragLayer'
import { DndProvider } from '../..'
import { TestBackend } from 'react-dnd-test-backend'
import { defineComponent, h } from 'vue-demi'
import { describe, it, expect, afterEach } from 'vitest'

async function fireDrag(source: Element) {
	await fireEvent.dragStart(source)
}

const DragLayer = defineComponent(() => {
	const collected = useDragLayer(monitor => ({
		item: monitor.getItem(),
		itemType: monitor.getItemType(),
		isDragging: monitor.isDragging(),
	}))

	return () => {
		if (!collected.value.isDragging) {
			return null
		}

		function renderItem() {
			return collected.value.item == null
				? null
				: h('div', { role: 'drag-layer' })
		}

		return h('div', [h('div', [renderItem()])])
	}
})

const Box = defineComponent(() => {
	const [, drag] = useDrag({
		type: 'box',
	})
	return () => h('div', { role: 'box', ref: drag })
})

describe('useDragLayer()', () => {
	afterEach(cleanup)

	it('can be used to retrieve information from the dnd monitor', async () => {
		const Example = defineComponent(() => {
			return () => h('div', [h(Box), h(DragLayer)])
		})
		const WrappedProvider = function (c: any) {
			return h(DndProvider, { backend: TestBackend }, [h(c)])
		}
		const rendered = render(WrappedProvider(Example))
		const box = await rendered.findByRole('box')
		let dragLayer = rendered.queryByRole('drag-layer')
		expect(box).toBeDefined()
		expect(dragLayer).toEqual(null)

		fireDrag(box)
		dragLayer = rendered.queryByRole('drag-layer')
		expect(dragLayer).toBeDefined()
	})
})
