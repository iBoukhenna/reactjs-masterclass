// re run test auto foreach save 
// yarn jest --watchAll

import React from 'react';
import { Modal } from './Modal';
import { render, fireEvent } from '@testing-library/react';
import { screen } from '@testing-library/dom';


test('test Modal', function () {
    render(<Modal title="Hello Every One !" onClose={() => null}>Hello</Modal>)
    const title = screen.getByText('Hello Every One !')
    expect(title).toBeInTheDocument()
})

test('close on x click', function () {
    const mockClose = jest.fn()
    render(<Modal title="Hello Every One !" onClose={mockClose}>Hello</Modal>)
    const close = document.body.querySelector("[aria-label='Close']")
    fireEvent.click(close)
    expect(mockClose.mock.calls.length).toBe(1)
})

test('close on escape key', function () {
    const mockClose = jest.fn()
    render(<Modal title="Hello Every One !" onClose={mockClose}>Hello</Modal>)
    fireEvent.keyDown(document, {key: 'Escape'})
    expect(mockClose.mock.calls.length).toBe(1)
})

test('does nothing on keydown not being escape', function () {
    const mockClose = jest.fn()
    render(<Modal title="Hello Every One !" onClose={mockClose}>Hello</Modal>)
    fireEvent.keyDown(document, {key: 'Enter'})
    expect(mockClose.mock.calls.length).toBe(0)
})
