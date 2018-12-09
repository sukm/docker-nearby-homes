import React from 'react';
import PropTypes from 'prop-types';

const RightArrow = ({
  currIndex, goToNextSlide, listLength, isOddLen,
}) => {
  const lastI = isOddLen ? currIndex === listLength - 2 : currIndex === listLength - 1;
  return lastI ? (
    <div className="carousel-right-arrow-disabled" />
  ) : (
    <div className="carousel-right-arrow" onClick={goToNextSlide} />
  );
};

RightArrow.propTypes = {
  currIndex: PropTypes.number.isRequired,
  goToNextSlide: PropTypes.func.isRequired,
  listLength: PropTypes.number.isRequired,
  isOddLen: PropTypes.bool.isRequired,
};

export default RightArrow;
