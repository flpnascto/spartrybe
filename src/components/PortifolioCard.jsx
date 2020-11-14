import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';
import Ranking from './Ranking';

class PortifolioCard extends React.Component {
  // criar função para alterar a cor da borda do card de acordo com a categoria
  // azul -> conservador
  // amarelo -> moderado
  // laranja -> agressivo
  render() {
    const { carteiras } = this.props;
    const {
      img,
      name,
      author,
      rating,
      ranking,
     } = carteiras;
    return (
      <div className="card" data-testid="card">
        <img alt="cover" className="card-image" src={img} />
        <h4 data-testid="card-name" className="card-name">{name}</h4>
        <Rating rating={rating} />
        <Ranking ranking={ranking} />
        <div className='card-author'>{author}</div>
      </div>
    );
  }
}

PortifolioCard.propTypes = { carteiras: PropTypes.arrayOf.isRequired };

export default PortifolioCard;
