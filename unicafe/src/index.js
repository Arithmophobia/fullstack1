import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
      amount: 0,
      sum: 0,
    }
  }

  handleClick = (value, selected) => {
    return () => {
      this.setState({
        [selected]: this.state[selected] + 1,
        sum: this.state.sum + value,
        amount: this.state.amount + 1
      })
    }
  }

  render() {
    const Statistic = ({ text, number, unit }) => {
      return (
        <tr>
          <td>{text}</td>
          <td>{number} {unit} </td>
        </tr>
      )
    }

    const Statistics = ({ amount, sum, good, neutral, bad }) => {
      let average = sum / amount;
      let positive = good * 100 / amount;
      var textOrStatistics = (amount > 0) ?
        <table>
          <tbody>
            <Statistic text="hyvä" number={good} unit="" />
            <Statistic text="neutraali" number={neutral} unit="" />
            <Statistic text="huono" number={bad} unit="" />
            <Statistic text="keskiarvo" number={average.toFixed(1)} unit="" />
            <Statistic text="positiivisia" number={positive.toFixed(1)} unit="%" />
          </tbody>
        </table>
        : "ei yhtään palautetta annettu";
      return (
        textOrStatistics
      )
    }

    const Button = ({ handleClick, text }) => (
      <button onClick={handleClick}>
        {text}
      </button>
    )

    return (
      <div>
        <div>
          <h1>Anna Palautetta</h1>
          <Button handleClick={this.handleClick(1, "good")} text="Hyvä" />
          <Button handleClick={this.handleClick(0, "neutral")} text="Neutraali" />
          <Button handleClick={this.handleClick(-1, "bad")} text="Huono" />
          <h1>Statistiikka</h1>
          <Statistics
            amount={this.state.amount}
            sum={this.state.sum}
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
          />
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)