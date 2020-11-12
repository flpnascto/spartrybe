import React from 'react'

class Menu extends React.Component {
  render() {
    return (
      <div className="menu">
        <div className="menu-logo">
          <img alt="logo" src="https://www.orama.com.br/static/img/logos/orama.svg" />
        </div>
        <div className="menu-nav">
          <a href="https://www.orama.com.br/empresa">A EMPRESA</a>
          <a href="https://www.orama.com.br/como-funciona">COMO FUNCIONA</a>
          <a href="https://www.orama.com.br/investimentos">INVESTIMENTOS</a>
          <a href="https://www.orama.com.br/atendimento">ATENDIMENTO</a>
        </div>
        <div className="menu-buttons">
          <a href="https://minhaconta.orama.com.br/login">SUA CONTA</a>
          <a href="https://minhaconta.orama.com.br/novo-cadastro">ABRA SUA CONTA</a>
        </div>
      </div>
    );
  }
}

export default Menu;