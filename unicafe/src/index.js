import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0
    }
  }

  clickGood = () => {
    this.setState({
      good: this.state.good + 1,
    })
  }

  clickNeutral = () => {
    this.setState({
      neutral: this.state.neutral + 1,
    })
  }

  clickBad = () => {
    this.setState({
      bad: this.state.bad + 1,
    })
  }

  render() {
    return (
      <div>
        <div>
          <h1>Anna Palautetta</h1>
          <button onClick={this.clickGood}>hyvä</button>
          <button onClick={this.clickNeutral}>neutraali</button>
          <button onClick={this.clickBad}>huono</button>
          <h1>Statistiikka</h1>
          <p>hyvä {this.state.good }</p>
          <p>neutraali {this.state.neutral }</p>
          <p>huono {this.state.bad }</p>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)