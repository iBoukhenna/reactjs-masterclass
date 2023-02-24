import { createRoot } from 'react-dom/client'
import React, { useState, useMemo } from 'react'

function wait(duration) {
    const t = Date.now()
    while (true) {
        if (Date.now() - t > duration) {
            return true
        }
    }

}

const Button = React.memo (function ({onClick}) {
    console.log('render')
    return <button onClick={onClick}>My button</button>
})

function App () {
    const [count, setCount] = useState(0)

    const handleClick = function () {
        alert('Hello')
    }

    return <div>
        <Button onClick={handleClick} />
        <button onClick={() => setCount(c => c + 1)}>Increase</button>
    </div>
}

const rootElement = document.getElementById("app");
const root = createRoot(rootElement);
root.render(
    <div>
        <App />
    </div>
)
