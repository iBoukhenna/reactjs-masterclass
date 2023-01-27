const container = document.querySelector('#app')
const root = ReactDOM.createRoot(container)

function WelcomeFunc({name, children}) {
    return <div>
        <h1>Hello {name}</h1>
        <p>{children}</p>
    </div>
}

class Welcome extends React.Component {

    // super must be called
    constructor (props) {
        super(props)
        console.log(props)
    }

    render() {
        return <div>
            <h1>Hello {this.props.name}</h1>
            <p>{this.props.children}</p>
        </div>
    }
}

root.render(<Welcome name="Amine">Hello World !</Welcome>)
