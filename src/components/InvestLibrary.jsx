import React, { Component } from 'react'


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
    return(
      <div>
        <InvestBar 
          nameFilter={name}
          onNameChange={this.onNameChange}
          categoryFilter={category}
          onCategoryChange={this.onCategoryChange}
        />
      </div>
    )
  }
}

export default InvestLibrary;