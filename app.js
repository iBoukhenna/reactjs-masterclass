const container = document.querySelector('#app')
const root = ReactDOM.createRoot(container)
let n = 0

// react update only the span, not like innerHTML
function render(root) {
    const title = <h1>
        Hello World ! <span>{n}</span>
    </h1>

    root.render(title)
}

render(root)

window.setInterval(() => {
    n++
    render(root)
}, 1000)