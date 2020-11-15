import React from 'react'
import '../styles/Aplicar.css'


class Aplicar extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      valor: '',
    }
  }

  handleClick = (event) => {
    alert('Aplicação realizada com sucesso!')
  }

  handleChange = (event) => {
    const { value } = event.target

    this.setState((previous) => ({
      valor: value,
    }))
  }
  render() {
    const { valor } = this.state
    return(
      <div className="invest-Container">
        {/* <label className="invest-label" htmlFor="input-value"> */}
          <input
            id="input-value"
            value={this.state.valor}
            onChange={this.handleChange}
            className="input-value"
            placeholder="R$00,00"/>
          {/* </label> */}
          <button className="invest-button" disabled={valor <= 0} onClick={this.handleClick}>Investir</button>
      </div>
    )
  }
}

export default Aplicar;