import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ModalInfo from './ModalInfo';
import './card.css';

const Card = ({ name, image, alignment }) => {
  const [toggleModal, setToggleModal] = useState(false);
  const hideModal = () => {
    setToggleModal(!toggleModal);
  };
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
    <>
      <div
        className={`card ${colorClass(alignment)}`}
        onClick={() => hideModal()}
        onKeyPress={() => hideModal()}
        role="button"
        tabIndex={0}
      >
        <img src={image} alt={name} />
        <h2>{name}</h2>
      </div>
      <div>
        {toggleModal && (
          <ModalInfo
            name={name}
            image={image}
            toggleModal={toggleModal}
            setToggleModal={setToggleModal}
            hideModal={hideModal}
          />
        )}
      </div>
    </>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  alignment: PropTypes.string.isRequired,
};

export default Card;
