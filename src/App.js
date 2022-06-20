import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <WelcomeFunc name="Amine">Bonjour tout le monde</WelcomeFunc>
      <Home />
      <Clock />
      <Incrementer start={10} />
      <Incrementer start={100} step={10} />
    </div>
  );
}

function WelcomeFunc ({name, children}) {
  return <div>
    <h1>Bonjour {name}</h1>
    <p>
      {children}
    </p>
  </div>
}

class Welcome extends React.Component {
  render () {
    return <div>
      <h1>Bonjour {this.props.name}</h1>
      <p>
        {this.props.children}
      </p>
    </div>
  }
}

function Home () {
  return <div>
    <Welcome name="Ibrahim" />
    <Welcome name="Ahmed" />
  </div>
}

class Clock extends React.Component {
  constructor (props) {
    super(props)
    this.state = {date: new Date()}
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
      Il est {this.state.date.toLocaleString()}
    </div>
  }

}


class Incrementer extends React.Component {

  constructor (props) {
    super(props)
    this.state = {index: props.start, timer: null}
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
    //this.setState((state, props) => ({index : state.index + 1}))
    
    this.setState(function(state, props) {
      return {index : state.index + props.step}
    })
  }

  pause () {
    window.clearInterval(this.state.timer)
    this.setState({
      timer: null
    })
  }

  play () {
    window.clearInterval(this.state.timer)
    this.state.timer = window.setInterval(this.increment.bind(this), 1000)
  }

  toggle () {
    return this.state.timer ? this.pause() : this.play()
  }

  label () {
    return this.state.timer ? 'Pause' : 'Play'
  }

  reset () {
    this.pause()
    this.play()
    this.setState(function(state, props) {
      return {index : props.start}
    })
  }

  render () {
    return <div>
      index : {this.state.index} 
      <button onClick={this.toggle}>{this.label()}</button>
      <button onClick={this.reset}>Reset</button>
    </div>
  }

}

Incrementer.defaultProps = {
  step : 1,
  start : 0
}

class ManualIncrementer extends React.Component {

  constructor (props) {
    super(props)
    this.state = {index: 0}
  }

  increment (e) {
    // pour empécher l'event par defaut comme dans le cas balise a il ne redirige vers le lien
    e.preventDefault()
    this.setState((state, props) => ({index : state.index + 1}))
  }

  render () {
    return <div>
      index : {this.state.index}
      <button onClick={this.increment.bind(this)}>Increment</button>
    </div>
  }

}


export default App;
