const container = document.querySelector('#app')
const root = ReactDOM.createRoot(container)

function Welcome({name, children}) {
    return <div>
        <h1>Hello {name}</h1>
        <p>{children}</p>
    </div>
}

root.render(<Welcome name="Amine">Hello World !</Welcome>)
