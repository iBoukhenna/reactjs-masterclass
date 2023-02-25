import { createRoot } from 'react-dom/client'
import React from 'react'

const theme = {
    dark: {
        background: '#000',
        color: '#FFF'
    },
    light: {
        background: '#FFF',
        color: '#000'
    }
}

// forward theme
function SearchForm({theme}) {
    return <div>
        <input type="text" style={theme}/>
        <button style={theme}>Search</button>
    </div>
}

// forward theme
function Toolbar({theme}) {
    return <div>
        <SearchForm theme={theme} />
        <button style={theme}>Button</button>
    </div>
}

// define theme
function App () {
    return <div><Toolbar theme={theme.dark} /></div>
}

const rootElement = document.getElementById("app");
const root = createRoot(rootElement);
root.render(
    <div>
        <App />
    </div>
)
