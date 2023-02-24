import { createRoot } from 'react-dom/client'
import React, { useState, useRef } from 'react'

function App () {

    const input = useRef(null)

    const counter = useRef({count: 0})

    const handleButtonClick = function () {
        counter.current.count++
        console.log(counter)
    }

    return <div>
        <input type="text" ref={input} />
        <button onClick={handleButtonClick}>Get value</button>
    </div>
}

const rootElement = document.getElementById("app");
const root = createRoot(rootElement);
root.render(
    <div>
        <App />
    </div>
)
