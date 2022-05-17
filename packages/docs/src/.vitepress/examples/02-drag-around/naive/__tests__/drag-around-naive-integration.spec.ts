import { cleanup, fireEvent } from '@testing-library/vue'
import {
	fireDrag,
	fireReleaseDrag,
	renderWithBackend,
	tick,
} from 'vue3-dnd-test-utils'
import { describe, it, expect, afterEach } from 'vitest'

import Example from '../index'

describe('Drag Around: Naive', () => {
	afterEach(cleanup)

	it('can hide the source node on drag', async () => {
		const rendered = renderWithBackend(Example)
		const getBoxes = () => rendered.findAllByTestId('box')
		const boxes = await getBoxes()
		expect(boxes.length).toEqual(2)
		const first = boxes[0]

		// Dragging a box hides it
		await fireDrag(first)
		await expect(getBoxes()).resolves.toHaveLength(1)

		// Dropping the box shows it again
		await fireReleaseDrag(rendered.container)
		await expect(getBoxes()).resolves.toHaveLength(2)
	})

	it('can disable source hiding', async () => {
		const rendered = renderWithBackend(Example)
		const getBoxes = () => rendered.findAllByTestId('box')
		const boxes = await getBoxes()
		const checkbox = await rendered.findByRole('checkbox')
		expect(boxes.length).toEqual(2)
		const first = boxes[0]

		// disable source hiding
		await fireEvent.change(checkbox)
		await tick()

		// Drag a box
		await fireDrag(first)
		await expect(getBoxes()).resolves.toHaveLength(2)

		// Drop the box
		await fireReleaseDrag(rendered.container)
		await expect(getBoxes()).resolves.toHaveLength(2)
	})
})
