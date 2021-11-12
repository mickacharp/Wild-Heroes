import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

const Button = ({ setFilter, allGenders }) => {
  /* eslint-disable */
  const handleGender = (e) => {
    if (e.target.value === '0') {
      return setFilter(allGenders[0].name);
    }
    if (e.target.value === '50') {
      return setFilter('');
    }
    if (e.target.value === '100') {
      return setFilter(allGenders[1].name);
    }
  };
  /* eslint-enable */
  return (
    <div className="slider-container">
      <input
        className="slider"
        type="range"
        id="slider"
        onChecked="checked"
        name="slider"
        step="50"
        onChange={(e) => handleGender(e)}
      />
    </div>
  );
};

Button.propTypes = {
  setFilter: PropTypes.func.isRequired,
  allGenders: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default Button;
