const container = document.querySelector('#app')
const root = ReactDOM.createRoot(container)

class Home extends React.Component {

    constructor (props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.input = null
    }

    handleClick (e) {
        console.log(e, this.input.value)
    }

    render () {
        return <div>
            <input type="text" ref={(ref) => this.input = ref} />
            <button onClick={this.handleClick}>Test</button>
        </div>
    }
}

root.render(<Home />)
