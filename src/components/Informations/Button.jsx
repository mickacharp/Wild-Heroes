import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './button.css';

const Button = ({ setFilter, allGenders }) => {
  const [genderValue, setGenderValue] = useState();

  const handleGender = (e) => {
    let filterState = '';
    if (e === '0') {
      filterState = setFilter(allGenders[0].name);
    }
    if (e === '100') {
      filterState = setFilter(allGenders[1].name);
    }
    if (e === '50') {
      filterState = setFilter('');
    }
    return filterState;
  };
  const genderClass = (e) => {
    let inputFilterGender = '';
    if (e === '0') {
      inputFilterGender = 'filter-male';
    } else if (e === '100') {
      inputFilterGender = 'filter-female';
    } else {
      inputFilterGender = 'filter-all';
    }
    return inputFilterGender;
  };
  return (
    <div className="slider-container">
      <input
        className={`slider ${genderClass(genderValue)}`}
        type="range"
        id="slider"
        name="slider"
        step="50"
        onChange={(e) => {
          handleGender(e.target.value);
          setGenderValue(e.target.value);
        }}
      />
    </div>
  );
};

Button.propTypes = {
  setFilter: PropTypes.func.isRequired,
  allGenders: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default Button;
