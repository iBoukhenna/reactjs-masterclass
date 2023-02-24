import { createRoot } from 'react-dom/client'
import React, { useLayoutEffect, useCallback, useState, useRef } from 'react'

function wait(duration) {
    const t = Date.now()
    while (true) {
        if (Date.now() - t > duration) {
            return true
        }
    }

}

function App () {
    const [count, setCount] = useState(0)
    const button = useRef(null)

    const increase = useCallback(() => {
        setCount(c => c + 1)
    }, [])

    // useEffect is async but useLayoutEffect is sync
    // useLayoutEffect for DOM manup otherwise use useEffect
    useLayoutEffect(() => {
        if (count % 2 === 0) {
            button.current.style.color = 'red'
        } else {
            button.current.style.color = 'green'
        }
    }, [count])

    return <div>
        <button ref={button} onClick={increase}>Increase {count}</button>
    </div>
}

const rootElement = document.getElementById("app");
const root = createRoot(rootElement);
root.render(
    <div>
        <App />
    </div>
)
