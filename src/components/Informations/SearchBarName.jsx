import React from 'react';
import PropTypes from 'prop-types';
import './searchbarname.css';

const SearchbarName = ({ handleChange, searchName }) => {
  return (
    <div className="container">
      <div className="search">
        <div>
          <input
            type="text"
            placeholder="Enter your research"
            value={searchName}
            onChange={handleChange}
            required
          />
        </div>
      </div>
    </div>
  );
};

SearchbarName.propTypes = {
  handleChange: PropTypes.func.isRequired,
  searchName: PropTypes.string.isRequired,
};

export default SearchbarName;
