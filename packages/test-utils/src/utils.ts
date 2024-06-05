import { isVue3 } from 'vue-demi'

/**
 * A tick that users can use to work through the event queue
 */
export function tick(): Promise<void> {
  return new Promise(resolve => {
    setTimeout(resolve, 0)
  })
}

export function resolveProps<T extends Record<string, unknown>>(props: T) {
  return isVue3 ? props : { props }
}

export function resolveChildren<T>(children: T) {
  return isVue3 ? { default: () => children } : children
}
