import React from 'react';
import PropTypes from 'prop-types';
import imgReplace from '../../img/interrogation.png';
import './cardrandom.css';

const CardRandom = ({ name, image }) => {
  return (
    <>
      <div className="card-quiz">
        <img
          src={image}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = imgReplace;
          }}
          alt={name}
        />
        <h2>{name}</h2>
      </div>
    </>
  );
};

CardRandom.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
export default CardRandom;
