import React from 'react'
import InvestList  from './InvestList';
import InvestBar from './InvestBar'

class InvestLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.onNameChange = this.onNameChange.bind(this);
    this.onPerfilChange = this.onPerfilChange.bind(this);
    this.onCategoryChange = this.onCategoryChange.bind(this);
    this.onHorizonteChange = this.onHorizonteChange.bind(this);
    this.categoryFilter = this.categoryFilter.bind(this);
    this.filteredPortifolios = this.filteredPortifolios.bind(this);

    const { carteiras } = props;

    this.state = {
      name: '',
      perfil: '',
      categoria: '',
      horizonte: '',
      carteiras,
    }
  }

  onNameChange(event) {
    this.setState({ name: event.target.value})
  }

  onPerfilChange(event) {
    this.setState({ perfil: event.target.value });
  }

  onCategoryChange(event) {
    this.setState({ categoria: event.target.value });
  }

  onHorizonteChange(event) {
    this.setState({ horizonte: event.target.value });
  }

  categoryFilter(carteira, categoria) {
    if (categoria === '') {
      return carteira
    }

    return (carteira.category).find(e => e === categoria.toLowerCase())
  }

  filteredPortifolios({ name, perfil , categoria, horizonte, carteiras}) {
    return carteiras
      .filter((carteira) => this.categoryFilter(carteira, perfil))
      .filter((carteira) => this.categoryFilter(carteira, categoria))
      .filter((carteira) => this.categoryFilter(carteira, horizonte))
      .filter((carteira) => ((carteira.name).toLowerCase())
        .includes((name).toLowerCase()) || name === '');
  }


  render() {
    const { name, perfil, categoria, horizonte } = this.state
    // const { portfolioFilter } = this.state
    return(
      <div>
        <InvestBar 
          nameFilter={name}
          onNameChange={this.onNameChange}
          perfilFilter={perfil}
          onPerfilChange={this.onPerfilChange}
          categoryFilter={categoria}
          onCategoryChange={this.onCategoryChange}
          horizonteFilter={horizonte}
          onHorizonteChange={this.onHorizonteChange}          
        /> 
        <InvestList carteiras={this.filteredPortifolios(this.state)} />

      </div>
    )
  }
}

export default InvestLibrary;