import { SourceConnector } from '../SourceConnector'
import type { Backend } from 'dnd-core'
import { vi, describe, beforeEach, it, expect, MaybeMocked } from 'vitest'

describe('SourceConnector', () => {
	let backend: MaybeMocked<Backend>
	let connector: SourceConnector

	beforeEach(() => {
		backend = {
			setup: vi.fn(),
			teardown: vi.fn(),
			connectDragSource: vi.fn(),
			connectDragPreview: vi.fn(),
			connectDropTarget: vi.fn(),
			profile: vi.fn(),
		} as MaybeMocked<Backend>
		connector = new SourceConnector(backend)
	})

	it('unsubscribes drag source when clearing handler id', () => {
		const unsubscribeDragSource = vi.fn()
		backend.connectDragSource.mockReturnValueOnce(unsubscribeDragSource)

		connector.receiveHandlerId('test')
		connector.hooks.dragSource()({})
		expect(backend.connectDragSource).toHaveBeenCalled()
		expect(unsubscribeDragSource).not.toHaveBeenCalled()
		backend.connectDragSource.mockClear()

		connector.receiveHandlerId(null)
		expect(backend.connectDragSource).not.toHaveBeenCalled()
		expect(unsubscribeDragSource).toHaveBeenCalled()
	})

	it('unsubscribes drag preview when hook is called without node', () => {
		const unsubscribeDragSource = vi.fn()
		backend.connectDragSource.mockReturnValueOnce(unsubscribeDragSource)

		connector.receiveHandlerId('test')
		connector.hooks.dragSource()({})
		expect(backend.connectDragSource).toHaveBeenCalled()
		expect(unsubscribeDragSource).not.toHaveBeenCalled()
		backend.connectDragSource.mockClear()

		connector.hooks.dragSource()(null)
		expect(backend.connectDragSource).not.toHaveBeenCalled()
		expect(unsubscribeDragSource).toHaveBeenCalled()
	})

	it('unsubscribes drag preview when clearing handler id', () => {
		const unsubscribeDragPreview = vi.fn()
		backend.connectDragPreview.mockReturnValueOnce(unsubscribeDragPreview)

		connector.receiveHandlerId('test')
		connector.hooks.dragPreview()({})
		expect(backend.connectDragPreview).toHaveBeenCalled()
		expect(unsubscribeDragPreview).not.toHaveBeenCalled()
		backend.connectDragPreview.mockClear()

		connector.receiveHandlerId(null)
		expect(backend.connectDragPreview).not.toHaveBeenCalled()
		expect(unsubscribeDragPreview).toHaveBeenCalled()
	})

	it('unsubscribes drag preview when hook called without node', () => {
		const unsubscribeDragPreview = vi.fn()
		backend.connectDragPreview.mockReturnValueOnce(unsubscribeDragPreview)

		connector.receiveHandlerId('test')
		connector.hooks.dragPreview()({})
		expect(backend.connectDragPreview).toHaveBeenCalled()
		expect(unsubscribeDragPreview).not.toHaveBeenCalled()
		backend.connectDragPreview.mockClear()

		connector.hooks.dragPreview()(null)
		expect(backend.connectDragPreview).not.toHaveBeenCalled()
		expect(unsubscribeDragPreview).toHaveBeenCalled()
	})
})
