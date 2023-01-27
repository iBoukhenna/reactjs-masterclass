const container = document.querySelector('#app')
const root = ReactDOM.createRoot(container)

function Welcome(props) {
    console.log(props)
    return <h1>Hello {props.name}</h1>
}

root.render(<Welcome name="Amine" />)
