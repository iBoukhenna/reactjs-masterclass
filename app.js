const container = document.querySelector('#app')
const root = ReactDOM.createRoot(container)

class Home extends React.Component {

    constructor (props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.input = React.createRef()
    }

    handleClick (e) {
        console.log(this.input.current.value)
    }

    render () {
        return <div>
            <input type="text" ref={this.input} />
            <button onClick={this.handleClick}>Test</button>
        </div>
    }
}

root.render(<Home />)
