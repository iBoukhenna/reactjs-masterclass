import { createRoot } from 'react-dom/client'
import React, { useState, useEffect } from 'react'

function useIncrease (init = 0, step = 1) {
    const [count, setCount] = useState(init)

    const increase = () => {
        setCount(c => c + step)
    }

    return [count, increase]
}

function useAutoIncrease (init = 0, step = 1) {
    const [count, increase] = useIncrease(init, step)

    useEffect(function () {
        const timer = window.setInterval(() => {
            increase()
        }, 1000)

        return function () {
            clearInterval(timer)
        }
    }, [])

    return count
}

function useToggle (init = true) {
    const [value, setValue] = useState(init)
    const toggle = function () {
        setValue(v => !v)
    }
    return [value, toggle]
}

function Counter () {
    const count = useAutoIncrease(10)

    return <>
        <button>increase : {count}</button>
    </>
}

function App () {
    const [counterVisible, toggleCounter] = useToggle(true)

    return <div>
        Show the counter <input type="checkbox" onChange={toggleCounter} checked={counterVisible} />
        <br />
        {counterVisible && <Counter />}
    </div>
}

const rootElement = document.getElementById("app");
const root = createRoot(rootElement);
root.render(
    <div>
        <App />
    </div>
)
