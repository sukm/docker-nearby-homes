import React from 'react';
import PropTypes from 'prop-types';

const CollapsibleTitle = ({ isExpanded, zipCode, toggleCollapsibleTitle }) => {
  let className = 'collapsible-title';
  isExpanded ? (className += '-collapsible') : (className += '-collapsed');

  return (
    <>
      <h2 className={className} onClick={toggleCollapsibleTitle}>
        Neighborhood:
        {zipCode}
      </h2>
    </>
  );
};

CollapsibleTitle.propTypes = {
  isExpanded: PropTypes.bool.isRequired,
  zipCode: PropTypes.string.isRequired,
  toggleCollapsibleTitle: PropTypes.func.isRequired,
};

export default CollapsibleTitle;
