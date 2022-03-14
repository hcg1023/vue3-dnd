export type ConnectableElement = Element | null

type ConnectNode<Options> = (
	elementOrNode: ConnectableElement,
	options?: Options
) => Element

export type ConnectDragSource<Options> = ConnectNode<Options>
export type ConnectDropTarget<Options> = ConnectNode<Options>
export type ConnectDragPreview<Options> = ConnectNode<Options>
