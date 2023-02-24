import { createRoot } from 'react-dom/client'
import React, { useState, useRef } from 'react'

function App () {

    const input = useRef(null)

    const handleButtonClick = function () {
        console.log(input.current.value)
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
