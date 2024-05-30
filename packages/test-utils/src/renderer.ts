import { wrapWithBackend } from './wrappers'
import { render, RenderOptions } from '@testing-library/vue'
import { Component } from 'vue-demi'
import { BackendFactory } from 'dnd-core'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { TestBackend } from 'react-dnd-test-backend'

export function renderWithBackend(
  DecoratedComponent: Component,
  renderOptions: RenderOptions<any> = {},
  Backend: BackendFactory = HTML5Backend,
  backendOptions: Record<string, any> = {}
) {
  const root = document.createElement('div')

  const WrappedWithBackend = wrapWithBackend(DecoratedComponent, Backend, {
    rootElement: root,
    ...backendOptions,
  })

  return render(WrappedWithBackend, {
    ...renderOptions,
    container: root,
  })
}

export function renderWithTestBackend(
  DecoratedComponent: Component,
  renderOptions: RenderOptions<any> = {},
  backendOptions: Record<string, any> = {}
) {
  return renderWithBackend(
    DecoratedComponent,
    renderOptions,
    TestBackend,
    backendOptions
  )
}
