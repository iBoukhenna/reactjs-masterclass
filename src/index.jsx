import { createRoot } from 'react-dom/client'
import React, { useState, useMemo, useCallback, useContext } from 'react'

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

const ThemeContext = React.createContext({
    theme: THEMES.dark,
    toggleTheme: () => {}
})

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
    const {theme} = useContext(ThemeContext)
    return <button style={theme}>{children}</button>
}

// use the hook useContext to replace the Consumer
function ThemedInput () {
    const {theme} = useContext(ThemeContext)
    return <input style={theme} type="text"/>
}

class ThemedButtonClass extends React.Component {
    render () {
        const {children} = this.props
        const {theme} = this.context
        return <button style={theme}>{children}</button>
    }
}
ThemedButtonClass.contextType = ThemeContext

function ThemeSwitcher () {
    const {toggleTheme} = useContext(ThemeContext)
    return <button onClick={toggleTheme}>Set theme</button>
}

// Provider to pass the value
function App () {
    const [theme, setTheme] = useState('light')
    const toggleTheme = useCallback(function () {
        setTheme(t => t === 'light' ? 'dark' : 'light')
    })
    const currentTheme = theme === 'light' ? THEMES.light : THEMES.dark

    const value = useMemo(function () {
        return {
            theme: theme === 'light' ? THEMES.light : THEMES.dark,
            toggleTheme
        }
    }, [toggleTheme, theme])

    return <div>
        <ThemeContext.Provider value={value}>
            <Toolbar />
            <ThemeSwitcher />
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
