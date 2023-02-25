import { createRoot } from 'react-dom/client'
import React, { useState, useMemo, useCallback, useContext } from 'react'

const FormContextContext = React.createContext({});

function FormContext ({defaultValue, onSubmit, children}) {
    const [data, setData] = useState(defaultValue)

    const change = useCallback(function (name, value) {
        //setData(d => Object.assign({}, d, {[name]: value}))
        setData(d => ({...d, [name]: value}))
    })

    const value = useMemo(function () {
        //return Object.assign({}, data, {change: change})
        return {...data, change}
    }, [data, change])

    const handleSubmit = useCallback(function (e) {
        e.preventDefault()
        onSubmit(value)
    }, [onSubmit, value])

    return <FormContextContext.Provider value={value}>
        <form onSubmit={handleSubmit}>
            {children}
        </form>
        {JSON.stringify(value)}
    </FormContextContext.Provider>
}

function FormField ({name, children}) {
    const data = useContext(FormContextContext)

    const handleChange = useCallback(function(e) {
        data.change(e.target.name, e.target.value)
    }, [data.change])

    return <div className="form-group">
        <label htmlFor={name}>{children}</label>
        <input value={data[name] || ''} onChange={handleChange} id={name} name={name} type="text" className="form-control" />
    </div>
}

function PrimaryButton ({children}) {
    const data = useContext(FormContextContext)
    return <button className="btn btn-primary">{children}</button>
}

function App () {
    const handleSubmit = useCallback(function (value) {
        console.log(value)
    }, [])

    return <div className="container">
        <FormContext defaultValue={{name: 'Ahmed', firstname: 'Amine'}} onSubmit={handleSubmit}>
            <FormField name="name">Name</FormField>
            <FormField name="firstname">First Name</FormField>
            <PrimaryButton>Envoyer</PrimaryButton>
        </FormContext>
    </div>
}

const rootElement = document.getElementById("app");
const root = createRoot(rootElement);
root.render(
    <div>
        <App />
    </div>
)
