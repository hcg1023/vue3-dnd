import { fireEvent } from '@testing-library/vue'
import { tick } from './utils'

export async function fireDragDrop(source: Element, target: Element) {
  await fireEvent.dragStart(source)
  await fireEvent.dragEnter(target)
  await fireEvent.dragOver(target)
  await fireEvent.drop(target)
  await tick()
}

export async function fireDragHover(source: Element, target: Element) {
  await fireEvent.dragStart(source)
  await fireEvent.dragEnter(target)
  await fireEvent.dragOver(target)
  await tick()
}

export async function fireDrag(source: Element) {
  await fireEvent.dragStart(source)
  await tick()
}

export async function fireReleaseDrag(container: Element | Window = window) {
  await fireEvent.drop(container)
  await tick()
}
