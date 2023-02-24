import { createRoot } from 'react-dom/client'
import React, { useReducer } from 'react'

function init (initValue) {
    return {count: initValue}
}

function reducer (state, action) {
    switch (action.type) {
        case 'increase':
            return {count: state.count + 1};
        case 'decrease':
            if (state.count <= 0) {
                return state;
            }
            return {count: state.count - 1};
        default:
            throw new Error("L'action " + action.type + " est inconnue")
    }
}

function App () {
    const [count, dispatch] = useReducer(reducer, 0, init)

    return <div>
        Counter : {JSON.stringify(count)}
        <button onClick={() => dispatch({type: 'increase'})}>Increase</button>
        <button onClick={() => dispatch({type: 'decrease'})}>Decrease</button>
    </div>
}

const rootElement = document.getElementById("app");
const root = createRoot(rootElement);
root.render(
    <div>
        <App />
    </div>
)
