import { MaybeRef } from './utils'

export type ConnectableElement = MaybeRef<Element | null>

export type ConnectNode<Options> = (
	elementOrNode: ConnectableElement,
	options?: Options
) => Element | null

export type ConnectDragSource<Options> = ConnectNode<Options>
export type ConnectDropTarget<Options> = ConnectNode<Options>
export type ConnectDragPreview<Options> = ConnectNode<Options>
