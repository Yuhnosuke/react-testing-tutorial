import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import Hello from '../hello'

let container = null
beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  unmountComponentAtNode(container)
  container.remove()
  container = null
})

it('renders with or without name', () => {
  act(() => {
    render(<Hello />, container)
  })
  expect(container.textContent).toBe('Hey, stranger')

  act(() => {
    render(<Hello name='hoge' />, container)
  })
  expect(container.textContent).toBe('Hello, hoge')

  act(() => {
    render(<Hello name='huga' />, container)
  })
  expect(container.textContent).toBe('Hello, huga')
})
