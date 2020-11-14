import React, { Component } from 'react'
import InvestList  from './InvestList';
import InvestBar from './InvestBar'

class InvestLibrary extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      perfil: '',
      categoria: '',
      horizonte: '',
      portfolioFilter: this.props.portfolios,
    }
  }

  onNameChange = (event) => {
    const { portfolios } = this.props
    const { value, name } = event.target
    const filterByName = portfolios.filter(portfolio => portfolio.name === value)
    this.setState(() => ({ 
      [name]: value,
      portfolioFilter: filterByName,
    }))
  }

  onCategoryChange = (event) => {
    const { value, name } = event.target
    const { portfolios } = this.props
    const filtered = portfolios.filter((portfolio) => portfolio.category.toString().indexOf(value) >= 0)
    console.log(filtered)
    console.log(value)
    this.setState(() => ({ 
      [name]: value,
      portfolioFilter: filtered,
    }))

  }
  render() {
    const { name, perfil, categoria, horizonte } = this.state
    const { portfolioFilter } = this.state
    return(
      <div>
        <InvestBar 
          nameFilter={name}
          onNameChange={this.onNameChange}
          perfilFilter={perfil}
          categoryFilter={categoria}
          horizonteFilter={horizonte}
          onCategoryChange={this.onCategoryChange}
        /> 
        <InvestList portfolios={portfolioFilter} />

      </div>
    )
  }
}

export default InvestLibrary;