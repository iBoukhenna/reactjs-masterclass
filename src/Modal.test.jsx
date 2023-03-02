// yarn add -D @testing-library/dom
// yarn add -D @testing-library/jest-dom

import React from 'react';
import { Modal } from './Modal';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';


test('test Modal', function () {
    render(<Modal title="Hello Every One !" onClose={() => null}>Hello</Modal>)
    const title = screen.getByText('Hello Every One !')
    expect(title).toBeInTheDocument()
})
