import type { FactoryOrInstance } from './types.js'
import { computed, ComputedRef } from 'vue-demi'

export function useOptionalFactory<T>(
  arg: FactoryOrInstance<T>
): ComputedRef<T> {
  return computed<T>(() => {
    return typeof arg === 'function' ? (arg as () => T)() : (arg as T)
  })
}
