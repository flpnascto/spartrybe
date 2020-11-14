import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    const { rate, people } = rating
    const
    return (
      <div className="rating">
        <span className="rate">{rate}</span>
        <span className="people">{people}</span>
      </div>
    );
  }
}

Rating.propTypes = { rating: PropTypes.arrayOf.isRequired };

export default Rating;
