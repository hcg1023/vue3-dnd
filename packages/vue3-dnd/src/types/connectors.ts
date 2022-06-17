import { ComponentPublicInstance } from 'vue-demi'
import { MaybeRef } from './utils'

export type ConnectableElement = MaybeRef<Element | null>

export interface ConnectNode<Options> {
  // Override the template ref type for the new version of vue
  (
    ref: Element | ComponentPublicInstance | null,
    refs: Record<string, any>
  ): void
  (ref: object | null, refs: Record<string, any>): void
  <E extends Element | null>(ref: MaybeRef<E>, options?: Options): E
}

export type ConnectDragSource<Options> = ConnectNode<Options>
export type ConnectDropTarget<Options> = ConnectNode<Options>
export type ConnectDragPreview<Options> = ConnectNode<Options>
