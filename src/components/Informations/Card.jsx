import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ModalInfo from './ModalInfo';
import imgReplace from '../../img/interrogation.png';
import './card.css';

const Card = ({
  name,
  image,
  alignment,
  stats,
  publisher,
  gender,
  race,
  weight,
  height,
  fullName,
  placeOfBirth,
  firstAppearance,
  groupAffiliation,
}) => {
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
      <div>
        {toggleModal && (
          <ModalInfo
            name={name}
            image={image}
            toggleModal={toggleModal}
            setToggleModal={setToggleModal}
            hideModal={hideModal}
            alignment={alignment}
            stats={stats}
            publisher={publisher}
            gender={gender}
            race={race}
            weight={weight}
            height={height}
            fullName={fullName}
            placeOfBirth={placeOfBirth}
            firstAppearance={firstAppearance}
            groupAffiliation={groupAffiliation}
          />
        )}
      </div>
    </>
  );
};

Card.propTypes = {
  stats: PropTypes.objectOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  alignment: PropTypes.string.isRequired,
  publisher: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  race: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  placeOfBirth: PropTypes.string.isRequired,
  firstAppearance: PropTypes.string.isRequired,
  groupAffiliation: PropTypes.string.isRequired,
};
export default Card;
