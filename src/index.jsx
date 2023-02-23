import {render} from 'react-dom'
import React from 'react'
import './index.css'

import {List} from './List.jsx'

render(
    <div>
        Hello world 
        <List />
    </div>,
    document.getElementById("app")
)