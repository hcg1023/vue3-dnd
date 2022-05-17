import { cleanup } from '@testing-library/vue'
import { vi, describe, afterEach, it } from 'vitest'
import { fireDragDrop, renderWithBackend } from 'vue3-dnd-test-utils'
import Example from '../index'

describe('Dustbin: Multiple Targets', () => {
	afterEach(cleanup)

	it('behaves as expected', async () => {
		const rendered = renderWithBackend(Example)

		// Verify that all of the key components mounted
		const dustbins = await rendered.findAllByTestId('dustbin')
		const boxes = await rendered.findAllByTestId('box')
		expect(dustbins.length).toEqual(4)
		expect(boxes.length).toEqual(3)

		window.alert = vi.fn()

		// Bin Types
		const glassBin = dustbins[0]!
		const foodBin = dustbins[1]!

		// Box Types
		const bottleBox = boxes[0] as HTMLDivElement
		const bananaBox = boxes[1]!

		// interactions

		// drop bottle into glass bin
		await fireDragDrop(bottleBox, glassBin)
		expect(glassBin.textContent).toContain(JSON.stringify({ name: 'Bottle' }))

		// food won't drop into the glass bin
		await fireDragDrop(bananaBox, glassBin)
		expect(glassBin.textContent).toContain(JSON.stringify({ name: 'Bottle' }))

		// glass won't drop into the food box...
		await fireDragDrop(bottleBox, foodBin)
		expect(foodBin.textContent).not.toContain('Last dropped')

		// but some food will work
		await fireDragDrop(bananaBox, foodBin)
		expect(foodBin.textContent).toContain('Last dropped')
		expect(foodBin.textContent).toContain(JSON.stringify({ name: 'Banana' }))
	})
})
