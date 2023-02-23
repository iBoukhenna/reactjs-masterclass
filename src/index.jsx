import { createRoot } from 'react-dom/client'
import React, { useState } from 'react'

// hook is simple function prefix by use
function useIncrease (init, step) {
    // call react hook
    const [count, setCount] = useState(init)
    // create function to set count
    const increase = () => {
        setCount(c => c + step)
    }
    // return count and function
    return [count, increase]
}

function Counter () {
    // use our hook
    const [count, increase] = useIncrease(5, 2)

    // call function
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