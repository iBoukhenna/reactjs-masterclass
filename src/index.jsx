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

function PostTable () {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(function () {
        (async function () {
            const response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=200')
            const responseData = await response.json()
            if (response.ok) {
                setItems(responseData)
            } else {
                alert(JSON.stringify(responseData))
            }
            setLoading(false)
        })()
    }, [])

    if (loading) {
        return 'Chargement ...'
    }

    return <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Body</th>
            </tr>
        </thead>
        <tbody>
            {items.map(item => <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.body}</td>
            </tr>)}
        </tbody>
    </table>
}

function TodoList () {
    const [todos, setTodos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(function () {
        (async function () {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
            const responseData = await response.json()
            if (response.ok) {
                setTodos(responseData)
            } else {
                alert(JSON.stringify(responseData))
            }
            setLoading(false)
        })()
    }, [])

    if (loading) {
        return 'Chargement ...'
    }

    return <ul>
        {todos.map(t => <li key={t.title}>{t.title}</li>)}
    </ul>
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
        <TodoList />
        <PostTable />
    </div>
}

const rootElement = document.getElementById("app");
const root = createRoot(rootElement);
root.render(
    <div>
        <App />
    </div>
)
