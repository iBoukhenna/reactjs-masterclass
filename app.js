const container = document.querySelector('#app')
const root = ReactDOM.createRoot(container)

const FieldWithRef = React.forwardRef((props, ref) => {
    return <Field forwardRef={ref}  {...props} />
})

class Field extends React.Component {
    render () {
        return <div className="form-group">
            <label>{this.props.label}</label>
            <input type="text" className="form-control" ref={this.props.forwardRef}/>
        </div>
    }
}

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
            <FieldWithRef ref={this.input} label="demo" />
            <button onClick={this.handleClick}>Test</button>
        </div>
    }
}

root.render(<Home />)
