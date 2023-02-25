import { createRoot } from 'react-dom/client'
import React, { useContext } from 'react'

const theme = {
    dark: {
        background: '#000',
        color: '#FFF',
        border: 'solid 1px #FFF'
    },
    light: {
        background: '#FFF',
        color: '#000',
        border: 'solid 1px #000'
    }
}

const ThemeContext = React.createContext(theme.dark)

function SearchForm() {
    return <div>
        <ThemedInput />
        <ThemedButton>Search</ThemedButton>
    </div>
}

function Toolbar() {
    return <div>
        <SearchForm />
        <ThemedButton>Button</ThemedButton>
    </div>
}

function ThemedButton ({children}) {
    const value = useContext(ThemeContext)
    return <button style={value}>{children}</button>
}

// use the hook useContext to replace the Consumer
function ThemedInput () {
    const value = useContext(ThemeContext)
    return <input style={value} type="text"/>
}

// Provider to pass the value
function App () {
    return <div>
        <ThemeContext.Provider value={theme.light}>
            <Toolbar />
        </ThemeContext.Provider>
    </div>
}

const rootElement = document.getElementById("app");
const root = createRoot(rootElement);
root.render(
    <div>
        <App />
    </div>
)
