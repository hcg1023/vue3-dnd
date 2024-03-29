import { inject, InjectionKey, provide } from 'vue-demi'
import type { DragDropManager } from 'dnd-core'

export const DndContextSymbol: InjectionKey<DragDropManager> =
  Symbol.for('DndContextType')

export function useDndContextProvider(dndContext: DragDropManager) {
  provide(DndContextSymbol, dndContext)
}

export function useDndContextInjector() {
  return inject(DndContextSymbol)
}
