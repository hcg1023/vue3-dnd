import type {
	DragDropManager,
	DropTarget,
	Unsubscribe,
	Identifier,
	TargetType,
	SourceType,
	DragSource,
} from 'dnd-core'
import { MaybeRef } from '../types/utils'
import { unref } from 'vue'

export function registerTarget(
	type: MaybeRef<TargetType>,
	target: MaybeRef<DropTarget>,
	manager: MaybeRef<DragDropManager>
): [Identifier, Unsubscribe] {
	const registry = unref(manager).getRegistry()
	const targetId = registry.addTarget(unref(type), unref(target))

	return [targetId, () => registry.removeTarget(targetId)]
}

export function registerSource(
	type: SourceType,
	source: DragSource,
	manager: DragDropManager
): [Identifier, Unsubscribe] {
	const registry = manager.getRegistry()
	const sourceId = registry.addSource(type, source)

	return [sourceId, () => registry.removeSource(sourceId)]
}
