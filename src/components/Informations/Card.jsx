import React from 'react';
import PropTypes from 'prop-types';
import './cards.css';

const Card = ({ name, image, alignment, setToggleModal, renderModal }) => {
  const colorClass = (ali) => {
    let heroClass = '';
    if (ali === 'good') {
      heroClass = 'good-card';
    } else if (ali === 'bad') {
      heroClass = 'bad-card';
    } else {
      heroClass = 'normal-card';
    }
    return heroClass;
  };

  return (
    <div
      className={`card ${colorClass(alignment)}`}
      onClick={() => setToggleModal()}
      onKeyPress={() => setToggleModal()}
      role="button"
      tabIndex={0}
    >
      <img src={image} alt={name} />
      <h2>{name}</h2>
      {renderModal(name)}
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  alignment: PropTypes.string.isRequired,
  setToggleModal: PropTypes.func.isRequired,
  renderModal: PropTypes.func.isRequired,
};

export default Card;
