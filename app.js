const container = document.querySelector('#app')
const root = ReactDOM.createRoot(container)

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
}

function toCelsius (fahrenheit) {
    return (fahrenheit - 32) * 5 / 9
}

function toFahrenheit (celsius) {
    return (celsius * 9 / 5) + 32
}

function tryConvert (temperature, convert) {
    const value = parseFloat(temperature)
    if (Number.isNaN(value)) {
        return '';
    }
    return (Math.round(convert(value) * 100) / 100).toString()
}

function BoilingVerdict ({value}) {
    if (value >= 100) {
        return <div className="alert alert-success">The water would boil</div>
    } else {
        return <div className="alert alert-info">The water would not boil</div>
    } 
}

class TemperatureInput extends React.Component {
    constructor (props) {
        super(props)

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange (e) {
        this.props.onTemperatureChange(e.target.value)
    }

    render () {
        const {temperature} = this.props
        const name = 'scale' + this.props.scale
        const scaleName = scaleNames[this.props.scale];
        return <div className="form-group">
            <label htmlFor={name}>Temperature ({scaleName}) : </label>
            <input type="text" id={name} name={name} value={temperature} onChange={this.handleChange} className="form-control" />
        </div>
    }
}

function Button ({type, children}) {
    const className = 'btn btn-' + type
    return <button className={className}>{children}</button>
}

function PrimaryButton ({children}) {
    return <Button type="primary">{children}</Button>
}

function SecondaryButton ({children}) {
    return <Button type="secondary">{children}</Button>
}

function ColomnTwo ({left, right}) {
    return <div className="row">
        <div className="col-md-6">{left}</div>
        <div className="col-md-6">{right}</div>
    </div>
}

class Calculator extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            scale: 'c',
            temperature: 20
        }

        this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
    }

    handleFahrenheitChange (temperature) {
        this.setState({
            scale: 'f',
            temperature
        })
    }

    handleCelsiusChange (temperature) {
        this.setState({
            scale: 'c',
            temperature
        })
    }

    render () {
        const {temperature, scale} = this.state
        const celsius = scale === 'c' ? temperature : tryConvert(temperature, toCelsius)
        const fahrenheit = scale === 'f' ? temperature : tryConvert(temperature, toFahrenheit)
        return <div>
                <ColomnTwo 
                    left={<TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange} />}
                    right={<TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange} />}
                    />
                <br/>
                <BoilingVerdict value={parseFloat(celsius)} />
                <br/>
                <Button type="primary">Send</Button>
                <br/>
                <PrimaryButton>Send</PrimaryButton>
                <br/>
                <SecondaryButton>Send</SecondaryButton>
            <br/>
            <br/>{JSON.stringify(this.state)}
        </div>
    }
}

root.render(<Calculator />)
