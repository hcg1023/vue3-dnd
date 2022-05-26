import Example from '../index'
import { cleanup } from '@testing-library/vue'
import { fireDragDrop, renderWithBackend } from 'vue3-dnd-test-utils'
import { vi, describe, afterEach, test, expect } from 'vitest'

describe('Integration: Dustbin Single Target', () => {
  afterEach(cleanup)

  test('can simulate a full drag and drop interaction', async () => {
    const rendered = renderWithBackend(Example)
    window.alert = vi.fn()
    const box = (await rendered.findAllByRole('Box'))[0]
    const dustbin = await rendered.findByRole('Dustbin')
    expect(box).toBeDefined()
    expect(dustbin).toBeDefined()

    await fireDragDrop(box!, dustbin)
    expect(window.alert).toHaveBeenCalledWith(`You dropped Glass into Dustbin!`)
  })
})
