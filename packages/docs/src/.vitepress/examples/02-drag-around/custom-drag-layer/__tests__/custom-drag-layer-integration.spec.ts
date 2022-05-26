import { cleanup, fireEvent } from '@testing-library/vue'
import { renderWithBackend, tick } from 'vue3-dnd-test-utils'
import { vi, describe, afterEach, it, expect } from 'vitest'
import Example from '../index.js'

describe('Drag Around: Custom Drag Layer', () => {
  afterEach(cleanup)

  it('toggles the overlay layer over time', async () => {
    vi.useFakeTimers()
    const rendered = renderWithBackend(Example)
    const draggableBoxes = await rendered.findAllByRole('DraggableBox')
    expect(draggableBoxes).toHaveLength(2)
    const first = draggableBoxes[0]
    const second = draggableBoxes[1]

    // Dragging a box hides it
    let tickAwait = tick()
    await fireEvent.dragStart(first)
    vi.advanceTimersByTime(10)
    await tickAwait

    expect(first).toHaveStyle({ opacity: 0 })
    expect(second).toHaveStyle({ opacity: 1 })

    const preview = await rendered.findByRole('BoxPreview')
    expect(preview).toHaveStyle({ backgroundColor: 'white' })

    vi.advanceTimersByTime(501)
    await tickAwait
    expect(preview).toHaveStyle({ backgroundColor: 'yellow' })

    vi.advanceTimersByTime(501)
    await tickAwait
    expect(preview).toHaveStyle({ backgroundColor: 'white' })
  })
})
