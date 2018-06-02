import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: 0,
            points: [0, 0, 0, 0, 0, 0]
        }
    }
    nextOne = () => () => this.setState({ selected: Math.floor(Math.random() * (5 - 0 + 1) + 0) })
    render() {

        const vote = (selected) => {
            const handler = () => {
                const copy = this.state.points;
                copy[selected] += 1;
                this.setState({ points: copy })
            }
            return handler
        }

        const best = () => {
            const copy = this.state.points;
            var max = copy.reduce(function (a, b) {
                return Math.max(a, b);
            });
            var index = copy.findIndex(function (a) {
                return a === max;
            });
            
            if (index > -1){
                return index;
            }
            else return 0;
        }

        return (
            <div>
                {this.props.anecdotes[this.state.selected]}
                <div>has {this.state.points[this.state.selected]} votes</div>
                <div>
                    <button onClick={this.nextOne()}>next anecdote</button>
                    <button onClick={vote(this.state.selected)}>vote</button>
                </div>
                <h1>Anecdote with most votes:</h1>
                {this.props.anecdotes[best()]}
                <div>has {this.state.points[best()]} votes </div>
            </div>
        )
    }
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)