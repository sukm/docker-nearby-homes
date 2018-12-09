import React from 'react';
import PropTypes from 'prop-types';

const PopupMain = ({ backgroundImg }) => (
  <div className="media-details-grid_main">
    <div className="media js-media-photo" data-photo-id="1">
      <img className="photo-box-img" src={backgroundImg} />
    </div>
  </div>
);

PopupMain.propTypes = {
  backgroundImg: PropTypes.string.isRequired,
};

export default PopupMain;
