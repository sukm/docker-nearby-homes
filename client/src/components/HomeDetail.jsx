import React from 'react';
import PropTypes from 'prop-types';
import HomeStatus from './HomeStatus';
import HomePosted from './HomePosted';
import LikeButton from './LikeButton';

const HomeDetail = ({
  home, handleContentClick, homeValue, sqft,
}) => (
  <>
    <LikeButton />
    <div className="home-content-box" onClick={handleContentClick(home)}>
      <div className="home-photo-inline-top">
        <ul className="home-posted-inline">
          <HomePosted home={home} />
        </ul>
      </div>
    </div>
    <div className="home-photo-card-content">
      <div className="home-photo-card-caption">
        <h4 className="home-photo-card-spec">
          <HomeStatus status={home.status} />
        </h4>
        <p className="home-photo-card-spec">
          <span className="home-photo-card-price">
            $
            {homeValue}
            {' '}
          </span>
          <span className="home-photo-card-spec">
            <span>
              <span className="property-beds">
                {home.numberOfBedroom}
                {' '}
                bds
              </span>
              <span className="property-baths">
                {home.numberOfBathroom}
                {' '}
                ba
              </span>
              <span className="property-area">
                {sqft}
                {' '}
                sqft
              </span>
            </span>
          </span>
        </p>
        <p className="home-photo-card-spec-address">
          <span className="home-photo-card-address">
            {home.streetName}
            ,
            {home.cityName}
            ,
            {home.stateName}
            ,
            {home.zipCode}
          </span>
        </p>
      </div>
    </div>
  </>
);

HomeDetail.propTypes = {
  handleContentClick: PropTypes.func.isRequired,
  homeValue: PropTypes.string.isRequired,
  sqft: PropTypes.string.isRequired,
};

export default HomeDetail;
