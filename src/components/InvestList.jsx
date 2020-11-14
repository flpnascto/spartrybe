import React from 'react'
import PropTypes from 'prop-types';
import PortifolioCard from './PortifolioCard'


class InvestList extends React.Component {
  render() {
    const { carteiras } = this.props
    return(
      <div>
        {carteiras.map((carteira) => <PortifolioCard carteira={carteira} key={carteira.id} />)}
      </div>
    )
  }
}

// InvestList.propTypes = { carteiras: PropTypes.arrayOf.isRequired }

export default InvestList;