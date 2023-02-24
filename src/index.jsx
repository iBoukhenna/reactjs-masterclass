import { createRoot } from 'react-dom/client'
import React, { useLayoutEffect, useCallback, useState } from 'react'

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

    const increase = useCallback(() => {
        setCount(c => c + 1)
    }, [])

    // useEffect is async but useLayoutEffect is sync
    useLayoutEffect(() => {
        wait(1000)
        console.log(count)
    })

    return <div>
        <button onClick={increase}>Increase {count}</button>
    </div>
}

const rootElement = document.getElementById("app");
const root = createRoot(rootElement);
root.render(
    <div>
        <App />
    </div>
)
