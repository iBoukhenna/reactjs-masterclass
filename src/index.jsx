import { createRoot } from 'react-dom/client'
import React, { useState } from 'react'

function Counter () {
    const count = useState(0)
    // it contains an array with the value and function to set the value
    console.log(count)
    return <button></button>
}

const rootElement = document.getElementById("app");
const root = createRoot(rootElement);
root.render(
    <div>
        <Counter />
    </div>
)