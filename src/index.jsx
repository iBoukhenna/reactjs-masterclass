import { createRoot } from 'react-dom/client'
import React, { useState, useCallback } from 'react'

function wait(duration) {
    const t = Date.now()
    while (true) {
        if (Date.now() - t > duration) {
            return true
        }
    }

}

const Button = React.memo(function ({onClick}) {
    // this function will be called for each click because it's a new instance
    console.log('render')
    return <button onClick={onClick}>My button</button>
})

function App () {
    const [count, setCount] = useState(0)

    // replace useMemo by useCallback when the return is the function
    const handleClick = useCallback(function () {
            alert('Hello' + count)
    }, [count])

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
