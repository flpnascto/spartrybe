import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Rating.css';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    const { rate, people } = rating
    return (
      <div className="rating">
        <span className="rate"><i className="fas fa-star"></i><i className="fas fa-star"></i>{rate}</span>
        <span className="people">{people}<i class="fas fa-user-friends"></i></span>
      </div>
    );
  }
}

Rating.propTypes = { rating: PropTypes.arrayOf.isRequired };

export default Rating;
