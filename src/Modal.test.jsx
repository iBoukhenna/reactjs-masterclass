// yarn add -D @testing-library/react
// yarn add -D @types/jest
// yarn add -D babel-jest @babel/preset-env @babel/preset-react

import React from 'react';
import { Modal } from './Modal';
import { render } from '@testing-library/react';


test('test Modal', function () {
    render(<Modal title="Hello Every One !" onClose={() => null}><div id="demo"></div></Modal>)
    const demo = document.querySelector('#demo')
    expect(demo).not.toBeNull()
})
