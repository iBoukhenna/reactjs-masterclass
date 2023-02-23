import { createRoot } from 'react-dom/client'
import React, { useState } from 'react'

// when call use state react create a variable to save the state of component it the hook
// the hook save the value, for each render the function will call back 
// with use state react know the old value and in the first value it put the new value the second param is the function to set the value
function useIncrease (init, step) {
    const [count, setCount] = useState(init)

    const increase = () => {
        setCount(c => c + step)
    }

    return [count, increase]
}

function Counter () {
    const [count, increase] = useIncrease(5, 2)

    return <>
        <button onClick={increase}>increase : {count}</button>
    </>
}

function CounterA () {
    const [count, increase] = useIncrease(5, 2)

    return <>
        <a onClick={increase}>increase : {count}</a>
    </>
}

const rootElement = document.getElementById("app");
const root = createRoot(rootElement);
root.render(
    <div>
        <Counter />
        <CounterA />
    </div>
)