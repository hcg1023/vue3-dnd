import { h, defineComponent, Component } from 'vue-demi'
import {
  TestBackend,
  ITestBackend,
  TestBackendOptions,
} from 'react-dnd-test-backend'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'vue3-dnd'
import type { BackendFactory } from 'dnd-core'
import { resolveChildren, resolveProps } from './utils'

/**
 * Wrap a Component with a DnDContext using the TestBackend
 *
 * @param DecoratedComponent The component to decorate
 * @param backendOptions
 * @returns [Component, getBackend] The wrapped component and a utility method
 * to get the test backend instance.
 */
export function wrapWithTestBackend(
  DecoratedComponent: Component,
  backendOptions?: unknown
): [Component, () => ITestBackend | undefined] {
  let backend: ITestBackend | undefined
  const opts: TestBackendOptions = Object.assign(
    {
      onCreate(be: ITestBackend) {
        backend = be
      },
    },
    backendOptions
  )
  const result = wrapWithBackend(DecoratedComponent, TestBackend, opts)
  return [result, () => backend]
}

/**
 * Wrap a component with a DndContext providing a backend.
 *
 * @param DecoratedComponent The component to decorate
 * @param Backend The backend to use (default=HTML5Backend)
 * @param backendOptions The optional backend options
 */
export function wrapWithBackend(
  DecoratedComponent: Component,
  Backend: BackendFactory = HTML5Backend,
  backendOptions?: unknown
): Component {
  return defineComponent({
    inheritAttrs: false,
    render() {
      return h(
        DndProvider,
        resolveProps({
          backend: Backend,
          options: backendOptions,
        }),
        resolveChildren([
          h(DecoratedComponent, resolveProps({ ...this.$attrs })),
        ])
      )
    },
  })
}
