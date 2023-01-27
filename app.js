const container = document.querySelector('#app')
const root = ReactDOM.createRoot(container)
let n = 0

function numberFormat(n) {
    return n.toString().padStart(2, '0')
}

// react update only the span, not like innerHTML
function render(root) {
    const items = [
        'Task 1',
        'Task 2',
        'Task 3'
    ]
    const lis = items.map((item, k) => <li key={k}>{item}</li>)
    // the attr class replaced by className 
    const title = <React.Fragment>
        <h1 className="title" id={"title" + n}>
            Hello World ! <span>{['timer : ', n % 2 ? numberFormat(n) : null]}</span>
        </h1>
        <ul>
            {lis}
        </ul>
    </React.Fragment>

    root.render(title)
}

render(root)

window.setInterval(() => {
    n++
    render(root)
}, 1000)