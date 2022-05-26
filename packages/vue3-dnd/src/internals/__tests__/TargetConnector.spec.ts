import { TargetConnector } from '../TargetConnector'
import type { Backend } from 'dnd-core'
import { vi, describe, it, expect, MockedObject } from 'vitest'

describe('TargetConnector', () => {
  it('unsubscribes drop target when clearing handler id', () => {
    const backend = {
      setup: vi.fn(),
      teardown: vi.fn(),
      connectDragSource: vi.fn(),
      connectDragPreview: vi.fn(),
      connectDropTarget: vi.fn(),
    } as MockedObject<Backend>
    const connector = new TargetConnector(backend)
    const unsubscribeDropTarget = vi.fn()
    backend.connectDropTarget.mockReturnValueOnce(unsubscribeDropTarget)

    connector.receiveHandlerId('test')
    connector.hooks.dropTarget()({})
    expect(backend.connectDropTarget).toHaveBeenCalled()
    expect(unsubscribeDropTarget).not.toHaveBeenCalled()
    backend.connectDropTarget.mockClear()

    connector.receiveHandlerId(null)
    expect(backend.connectDropTarget).not.toHaveBeenCalled()
    expect(unsubscribeDropTarget).toHaveBeenCalled()
  })
})
