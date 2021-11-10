import React from 'react';
import PropTypes from 'prop-types';
import CardRandom from './CardRandom';
import './cardrandom.css';

const CardsShuffle = ({ hero }) => {
  return (
    <div className="card-list">
      {hero.map((el) => (
        <CardRandom key={el.id} image={el.image.url} name={el.name} />
      ))}
    </div>
  );
};
CardsShuffle.propTypes = {
  hero: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default CardsShuffle;
