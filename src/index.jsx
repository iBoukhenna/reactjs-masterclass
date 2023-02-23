import { createRoot } from 'react-dom/client'
import React, { useState } from 'react'

function Counter () {
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)
    // react use the execution context to know which instance of component to be update 
    const handleClick = function (e) {
        e.preventDefault()
        setCount(c => c + 1)
    }
    const handleClick2 = function (e) {
        e.preventDefault()
        setCount2(c => c + 2)
    }
    return <>
        <button onClick={handleClick}>increase : {count}</button>
        <button onClick={handleClick2}>increase : {count2}</button>
    </>
}

const rootElement = document.getElementById("app");
const root = createRoot(rootElement);
root.render(
    <div>
        <Counter />
    </div>
)