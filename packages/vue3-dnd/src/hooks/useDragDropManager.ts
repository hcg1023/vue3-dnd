import type { DragDropManager } from 'dnd-core'
import { invariant } from '@react-dnd/invariant'
import { useDndContextInjector } from '../core'

/**
 * A hook to retrieve the DragDropManager from Context
 */
export function useDragDropManager(): DragDropManager {
  const dragDropManager = useDndContextInjector()

  invariant(dragDropManager != null, 'Expected drag drop context')

  return dragDropManager as DragDropManager
}
