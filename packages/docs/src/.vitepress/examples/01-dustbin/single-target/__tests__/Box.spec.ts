import Box from '../Box.vue'
import { fireEvent, cleanup } from '@testing-library/vue'
import { fireDrag, renderWithBackend } from 'vue3-dnd-test-utils'
import { describe, afterEach, it, expect } from 'vitest'

describe('Box', () => {
  afterEach(cleanup)

  it('can be tested with a backend', async () => {
    const rendered = renderWithBackend(Box, {
      props: {
        name: 'test',
      },
    })
    // Check that the opacity is 1
    const box = rendered.getByTestId('box-test')
    expect(box).toBeDefined()
    expect(box).toHaveStyle({ opacity: '1' })

    // Opacity drops on Drag
    await fireDrag(box)
    expect(box).toHaveStyle({ opacity: '0.4' })

    // Opacity returns on dragend
    await fireEvent.dragEnd(box)
    expect(box).toHaveStyle({ opacity: '1' })
  })
})
