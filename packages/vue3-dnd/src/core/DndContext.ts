import { inject, InjectionKey, provide } from 'vue'
import type { DragDropManager } from 'dnd-core'

export const DndContextSymbol: InjectionKey<DragDropManager> =
	Symbol('DndContextType')

export function useDndContextProvider(dndContext: DragDropManager) {
	provide(DndContextSymbol, dndContext)
}

export function useDndContextInjector() {
	return inject(DndContextSymbol)
}
