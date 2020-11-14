import React, { Component } from 'react'
import InvestList  from './InvestList';
import PortfolioCard from './PortifolioCard'

class InvestLibrary extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      category: '',
    }
  }

  onNameChange = (event) => {

  }

  onCategoryChange = (event) => {

  }
  render() {
    const { name, category } = this.state
    const { portfolios } = this.props
    return(
      <div>
        {/* <InvestBar 
          nameFilter={name}
          onNameChange={this.onNameChange}
          categoryFilter={category}
          onCategoryChange={this.onCategoryChange}
        />  */}
        <InvestList portfolios={portfolios} />

      </div>
    )
  }
}

export default InvestLibrary;