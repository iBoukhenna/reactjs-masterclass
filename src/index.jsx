import { createRoot } from 'react-dom/client'
import React, { useState } from 'react'

function Counter () {
    // distructur the contains
    const [count, setCount] = useState(0)
    const handleClick = function (e) {
        e.preventDefault()
        setCount(10)
    }
    return <button onClick={handleClick}>Nomber : {count} </button>
}

const rootElement = document.getElementById("app");
const root = createRoot(rootElement);
root.render(
    <div>
        <Counter />
        <Counter />
    </div>
)