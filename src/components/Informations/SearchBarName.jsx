import React from 'react';
import PropTypes from 'prop-types';
import './searchbarname.css';

const SearchbarName = ({ handleChange, searchName }) => {
  return (
    <div className="search">
      <label htmlFor="inputName">
        <input
          className="inputName"
          type="text"
          value={searchName}
          placeholder="Enter the name of a character"
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

SearchbarName.propTypes = {
  handleChange: PropTypes.func.isRequired,
  searchName: PropTypes.string.isRequired,
};

export default SearchbarName;
