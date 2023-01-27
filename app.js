const container = document.querySelector('#app')
const root = ReactDOM.createRoot(container)

function WelcomeFunc ({name, children}) {
    return <div>
        <h1>Hello {name}</h1>
        <p>{children}</p>
    </div>
}

class Welcome extends React.Component {

    // super must be called
    constructor (props) {
        super(props)
    }

    render () {
        return <div>
            <h1>Hello {this.props.name}</h1>
            <p>{this.props.children}</p>
        </div>
    }
}

class Clock extends React.Component {

    constructor (props) {
        super(props)
        // state is an object that will represent the useful data inside the component
        this.state = {date : new Date()}
        this.timer = null
    }

    componentDidMount () {
        this.timer = window.setInterval(this.tick.bind(this), 1000)
    }

    componentWillUnmount () {
        window.clearInterval(this.timer)
    }

    tick () {
        this.setState({date: new Date()})
    }

    render () {
        return <div>
            It's {this.state.date.toLocaleDateString()} {this.state.date.toLocaleTimeString()}
        </div>
    }
}

function Home () {
    return <div>
        <Welcome name="Amine" />
        <Welcome name="Ahmed" />
        <Clock />
    </div>
}

root.render(<Home />)
