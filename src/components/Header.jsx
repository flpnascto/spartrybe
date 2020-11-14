import React, { Component } from 'react'
import '../styles/Header.css'

class Header extends Component {
  render() {
    return(
      <div className="header-content">
        <img alt="logo" src="https://www.orama.com.br/static/img/logos/orama.svg" />
      </div>
    )
  }
}

export default Header;