const container = document.querySelector('#app')
const root = ReactDOM.createRoot(container)
let n = 0

// react update only the span, not like innerHTML
function render(root) {
    const title = React.createElement('h1', {}
        , 'Hello World ! '
        , React.createElement('span', {}, n)
    )

    root.render(title)
}

render(root)

window.setInterval(() => {
    n++
    render(root)
}, 1000)