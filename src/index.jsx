import { createRoot } from 'react-dom/client'
import React, { useState, useEffect } from 'react'

function useIncrease (init, step) {
    const [count, setCount] = useState(init)

    const increase = () => {
        setCount(c => c + step)
    }

    return [count, increase]
}

function Counter () {
    const [count, increase] = useIncrease(5, 2)

    // diffrence with document.title = 'Counter ' + count
    // with useEffect the title change only if the param count change
    useEffect(() => {
        const timer = window.setInterval(() => {
            console.log('hello')
            increase()
        }, 1000)
        return function () {
            clearInterval(timer)
        }
    }, [])

    useEffect(() => {
        document.title = 'Counter ' + count
    }, [count])

    return <>
        <button onClick={increase}>increase : {count}</button>
    </>
}

const rootElement = document.getElementById("app");
const root = createRoot(rootElement);
root.render(
    <div>
        <Counter />
    </div>
)
