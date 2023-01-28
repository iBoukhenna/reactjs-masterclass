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

class Incrementer extends React.Component {

    constructor (props) {
        super(props)
        this.state = {count: props.start, timer: null}
        this.toggle = this.toggle.bind(this)
        this.reset = this.reset.bind(this)
    }

    componentDidMount () {
        this.play()
    }

    componentWillUnmount () {
        window.clearInterval(this.state.timer)        
    }

    increment () {
        this.setState((state, props) => ({count: state.count + props.step}))
    }

    pause () {
        window.clearInterval(this.state.timer)        
        this.setState({timer: null})
    }

    play () {
        window.clearInterval(this.state.timer)        
        this.setState({timer: window.setInterval(this.increment.bind(this), 1000)})
    }

    label () {
        return this.state.timer ? 'Pause' : 'Play'
    }

    toggle () {
        return this.state.timer ? this.pause() : this.play()
    }

    reset () {
        this.pause()
        this.play()
        this.setState((state, props) => ({count: props.start}))
    }

    render () {
        console.log('render')
        return <div>
            Counter : {this.state.count}
            <button onClick={this.toggle}>{this.label()}</button>
            <button onClick={this.reset}>Reset</button>
        </div>
    }
}

Incrementer.defaultProps = {
    start:0,
    step: 1
}

class ManualIncrementer extends React.Component {
    constructor (props) {
        super(props)
        this.state = {mcount: 0}
    }

    increment (e) {
        e.preventDefault()
        this.setState((state, props) => ({mcount: state.mcount + 1}))
    }

    render () {
        return <div>
            Manual Counter : {this.state.mcount} <a herf="https://www.google.com" onClick={this.increment.bind(this)}>Increment</a>
        </div>
    }
}

function Home () {
    return <div>
        <Welcome name="Amine" />
        <Welcome name="Ahmed" />
        <Clock />
        <Incrementer start={10} />
        <Incrementer start={100} step={10} />
        <ManualIncrementer />
    </div>
}

root.render(<Home />)
