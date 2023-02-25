import { createRoot } from 'react-dom/client'
import React, { useState, useCallback, useContext } from 'react'

const THEMES = {
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

const ThemeContext = React.createContext(THEMES.dark)

function SearchForm() {
    return <div>
        <ThemedInput />
        <ThemedButtonClass>Search</ThemedButtonClass>
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

class ThemedButtonClass extends React.Component {
    render () {
        const {children} = this.props
        const value = this.context
        return <button style={value}>{children}</button>
    }
}
ThemedButtonClass.contextType = ThemeContext

// Provider to pass the value
function App () {
    const [theme, setTheme] = useState('light')
    const toggleTheme = useCallback(function () {
        setTheme(t => t === 'light' ? 'dark' : 'light')
    })
    const currentTheme = theme === 'light' ? THEMES.light : THEMES.dark
    return <div>
        <ThemeContext.Provider value={currentTheme}>
            <Toolbar />
        </ThemeContext.Provider>
        <button onClick={toggleTheme}>Set theme</button>
    </div>
}

const rootElement = document.getElementById("app");
const root = createRoot(rootElement);
root.render(
    <div>
        <App />
    </div>
)
