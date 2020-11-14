import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Ranking.css';

class Ranking extends React.Component {
  render() {
    const { ranking } = this.props;
    const { position, profitability } = ranking
    return (
      <div className="ranking">
        <div>
          Ranking <br/>
          <span className="position">{position}</span>
        </div>
        <div>
          Rentabilidade <br/>
          Mês 
          <span className="profit">{profitability.oneMonth} % </span>
          <span className="profit">{profitability.oneYear} % </span>
          <span className="profit">{profitability.twoYear} % </span>
        </div>
      </div>
    );
  }
}



export default Ranking;