import React from 'react'
import ReactDOM from 'react-dom'


const Otsikko = (props) => {
    return (
        <div>
            <h1>{props.kurssi}</h1>
        </div>
    )
}

const Osa = (props) => {
    return (
        <div>
            <p>{props.osa} {props.tehtavat}</p>
        </div>
    )
}

const Sisalto = (props) => {
    return (
        <div>
            <Osa osa={props.osa1} tehtavat={props.tehtavat1}/>
            <Osa osa={props.osa2} tehtavat={props.tehtavat2}/>
            <Osa osa={props.osa3} tehtavat={props.tehtavat3}/>
        </div>
    )
}

const Yhteensa = (props) => {
  return (
    <div>
      <p>yhteensä {props.tehtavat1 + props.tehtavat2 + props.tehtavat3} tehtävää</p>
    </div>
  )
}

const App = () => {
  const kurssi = 'Half Stack -sovelluskehitys'
  const osa1 = 'Reactin perusteet'
  const tehtavia1 = 10
  const osa2 = 'Tiedonvälitys propseilla'
  const tehtavia2 = 7
  const osa3 = 'Komponenttien tila'
  const tehtavia3 = 14

  return (
    <div>
      <Otsikko kurssi={kurssi} />
      <Sisalto 
        osa1={osa1} osa2={osa2} osa3={osa3} 
        tehtavat1={tehtavia1} tehtavat2={tehtavia2} tehtavat3={tehtavia3} />
      <Yhteensa tehtavat1={tehtavia1} tehtavat2={tehtavia2} tehtavat3={tehtavia3}/>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)