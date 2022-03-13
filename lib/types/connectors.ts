import { ComponentPublicInstance, VNode } from 'vue'

export type ConnectableElement = Element | ComponentPublicInstance | null

export type ConnectDragSource = ConnectableElement
export type ConnectDropTarget = ConnectableElement
export type ConnectDragPreview<Options> = (
	elementOrNode: ConnectableElement,
	options?: Options
) => VNode
