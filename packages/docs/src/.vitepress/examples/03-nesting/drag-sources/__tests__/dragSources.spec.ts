import { cleanup, fireEvent } from '@testing-library/vue'
import { fireDragDrop, renderWithBackend } from 'vue3-dnd-test-utils'

import Example from '../index'

describe('the drag sources example', () => {
  afterEach(cleanup)

  it('can drag and drop a box', async () => {
    const rendered = renderWithBackend(Example)

    const boxes = await rendered.findAllByRole('SourceBox')
    const target = await rendered.findByRole('TargetBox')
    const box3 = boxes[3]!
    const box3Color = (box3.attributes as any)['data-color'].value
    await fireDragDrop(box3, target)
    expect((target.attributes as any)['data-color'].value).toEqual(box3Color)
  })

  it('can prevent a drag-and-drop', async () => {
    const rendered = renderWithBackend(Example)

    const boxes = await rendered.findAllByRole('SourceBox')
    const target = await rendered.findByRole('TargetBox')
    const box3 = boxes[3]!
    await fireEvent.change(box3.children[0]!)
    const box3Color = (box3.attributes as any)['data-color'].value
    await fireDragDrop(box3, target)
    expect((target.attributes as any)['data-color'].value).not.toEqual(
      box3Color
    )
  })
})
