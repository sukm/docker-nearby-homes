import React from 'react';
import PropTypes from 'prop-types';

const LeftArrow = ({ currIndex, goToPrevSlide }) => {
  return currIndex === 0 ? (
    <div className="carousel-left-arrow-disabled" />
  ) : (
    <div className="carousel-left-arrow" onClick={goToPrevSlide} />
  );
};

LeftArrow.propTypes = {
  currIndex: PropTypes.number.isRequired,
  goToPrevSlide: PropTypes.func.isRequired,
};

export default LeftArrow;
