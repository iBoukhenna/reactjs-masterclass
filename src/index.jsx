import { createRoot } from 'react-dom/client'
import React, { useState } from 'react'

function Counter () {
    // distructur the contains
    const [state, setState] = useState({
        a: 1
    })
    // react use the execution context to know which instance of component to be update 
    const handleClick = function (e) {
        e.preventDefault()
        setState(state => {
            return {...state, count: 10}
        })
    }
    return <div onClick={handleClick}>{JSON.stringify(state)}</div>
}

const rootElement = document.getElementById("app");
const root = createRoot(rootElement);
root.render(
    <div>
        <Counter />
        <Counter />
    </div>
)