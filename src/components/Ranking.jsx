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
        <i class="fas fa-trophy"></i> <br/>
          <span className="position">{position} º </span>
        </div>
        <div>
          Rentabilidade (%) <i class="far fa-chart-bar"></i><br/>
          <table className="profit-table">
            <tr className="profit-table-row">
              <th className="profit-table-column">Mês</th>
              <th className="profit-table-column">Ano</th>
              <th className="profit-table-column">12 meses</th>
            </tr>
            <tr className="profit-table-row">
              <th>{profitability.oneMonth}</th>
              <th>{profitability.ytd}</th>
              <th>{profitability.oneYear}</th>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}



export default Ranking;