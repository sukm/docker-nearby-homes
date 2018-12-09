import React from 'react';
import PropTypes from 'prop-types';
import HomeDetail from './HomeDetail';

const addCommas = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const Home = ({ home, handleContentClick }) => {
  const homeValue = addCommas(home.homeValue);
  const sqft = addCommas(home.sqft);

  return (
    <div
      className="home-main-container"
      style={{
        backgroundImage: `url(${home.homeImage})`,
      }}
    >
      <div className="home-inner-container">
        <div className="home-contents">
          <HomeDetail
            home={home}
            handleContentClick={handleContentClick}
            homeValue={homeValue}
            sqft={sqft}
          />
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {
  handleContentClick: PropTypes.func.isRequired,
};

export default Home;
