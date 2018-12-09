import React from 'react';
import PropTypes from 'prop-types';
import PopupMain from './PopupMain';
import PopupSide from './PopupSide';

const Popup = ({ clickedContent, handleContentCloseClick }) => (
  <div id="lightbox" className="lightbox is-enabled lightbox--media-details">
    <div id="lightbox-inner" className="lightbox-inner">
      <div className="lightbox-close" onClick={handleContentCloseClick} style={{ color: '#fff' }}>
        Close
        <i className="fa fa-times" />
      </div>
      <div className="media-lightbox">
        <div className="media-details">
          <div className="media-details_container">
            <div className="media-container js-media-container">
              <div className="media-details-grid">
                <PopupMain backgroundImg={clickedContent.homeImage} />

                <PopupSide home={clickedContent} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

Popup.propTypes = {
  handleContentCloseClick: PropTypes.func.isRequired,
};

export default Popup;
