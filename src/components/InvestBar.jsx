// implement SearchBar component here
import React from 'react';
import '../styles/InvestBar.css'

class InvestBar extends React.Component {
  inputSearch() {
    const { nameFilter, onNameChange } = this.props;
    return (
      <input
        className="input-box"
        type="text"
        name="name"
        value={nameFilter}
        onChange={onNameChange}
        data-testid="text-input"
        data-key="searchText"
        placeholder="pesquise o nome"
      />
  );
  }

  selectInvestorType() {
    const { perfilFilter, onPerfilChange } = this.props;
    return (
      <div className="box">
        <select
          name="perfil"
          value={perfilFilter}
          onChange={onPerfilChange}
          data-testid="select-input"
          data-key="selectedGenre"
        >
          <option selected value="" data-testid="select-option">
            Perfil:
          </option>
          <option value="conservador" data-testid="select-option">
            Conservador
          </option>
          <option value="moderado" data-testid="select-option">
            Moderado
          </option>
          <option value="agressivo" data-testid="select-option">
            Agressivo
          </option>
        </select>
      </div>
      // <label className="form-label" htmlFor="select-input" data-testid="select-input-label" >
      //   Perfil:
      //   <select
      //     name="perfil"
      //     value={perfilFilter}
      //     onChange={onPerfilChange}
      //     data-testid="select-input"
      //     data-key="selectedGenre"
      //   >
      //     <option selected value="" data-testid="select-option">
      //       Perfil:
      //     </option>
      //     <option value="conservador" data-testid="select-option">
      //       Conservador
      //     </option>
      //     <option value="moderado" data-testid="select-option">
      //       Moderado
      //     </option>
      //     <option value="agressivo" data-testid="select-option">
      //       Agressivo
      //     </option>
      //   </select>
      // </label>
    );
  }

  category() {
    const { categoryFilter, onCategoryChange } = this.props;
    return (
      <div className="box">
        <select
          name="categoria"
          value={categoryFilter}
          onChange={onCategoryChange}
          data-testid="select-input"
          data-key="selectedGenre"
        >
          <option selected value="" data-testid="select-option">
            Categorias:
          </option>
          <option value="renda fixa" data-testid="select-option">
            Renda Fixa
          </option>
          <option value="multimercado" data-testid="select-option">
            Multimercado
          </option>
          <option value="renda variavel" data-testid="select-option">
            Renda Variável
          </option>

          <option value="internacional" data-testid="select-option">
            Internacional
          </option>

          <option value="alternativos" data-testid="select-option">
            Alternativos
          </option>
        </select>
      </div>
    );
  }

  timeRange() {
    const { horizonteFilter, onHorizonteChange } = this.props;
    return (
      <div className="box">
        <select
          name="horizonte"
          value={horizonteFilter}
          onChange={onHorizonteChange}
          data-testid="select-input"
          data-key="selectedGenre"
        >
          <option selected value="" data-testid="select-option">
            Horizonte:
          </option>
          <option value="curto prazo" data-testid="select-option">
            Curto Prazo
          </option>
          <option value="medio prazo" data-testid="select-option">
            Médio Prazo
          </option>
          <option value="longo prazo" data-testid="select-option">
            Longo Prazo
          </option>
        </select>
      </div>
    );
  }

  render() {
    return (
      <div>
        <form
          // prettier-ignore
          onSubmit={(event) => event.preventDefault()}
          data-testid="search-bar-form"
        >
          <fieldset className="form-container">
          	{this.inputSearch()}
          	{this.selectInvestorType()}
          	{this.category()}
          	{this.timeRange()}
          </fieldset>
        </form>
      </div>
    );
  }
}



export default InvestBar;
