import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

const Button = ({ setFilter, allGenders }) => {
  /* eslint-disable */
  const handleGender = (e) => {
    if (e.target.value === '0') {
      return setFilter(allGenders[0].name);
    }
    if (e.target.value === '2') {
      return setFilter(allGenders[1].name);
    }
    if (e.target.value === '1') {
      return setFilter('');
    }
  };
  /* eslint-enable */
  return (
    <div className="slider-container">
      <div>
        <label htmlFor="slider">
          Gender
          <input
            type="range"
            id="slider"
            name="slider"
            min="0"
            max="2"
            step="1"
            onChange={(e) => handleGender(e)}
          />
        </label>
      </div>
    </div>
  );
};

Button.propTypes = {
  setFilter: PropTypes.func.isRequired,
  allGenders: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default Button;
