export function isVNode(value: any) {
  return value ? value.__v_isVNode === true : false
}

export function isVueSkipInstance(element: any): boolean {
  return element ? element.__v_skip : false
}

export function isValidElement(element: any) {
  return isVNode(element) && typeof element.type !== 'symbol' // remove text node
}
