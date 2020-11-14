import React, { Component } from 'react'
import PortifolioCard from './PortifolioCard'


class InvestList extends Component {
  render() {
    const { portfolios } = this.props
    return(
      <div>
        {portfolios.map(portfolio => <PortifolioCard carteiras={portfolio}/>)}
      </div>
    )
  }
}

export default InvestList;