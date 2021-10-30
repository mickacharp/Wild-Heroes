import React from 'react';
import PropTypes from 'prop-types';
import HeroStats from './HeroStats';
import HeroBio from './HeroBio';
import './modalinfo.css';

const ModalInfo = ({ setToggleModal }) => {
  return (
    <div className="Modal">
      <button
        type="button"
        className="close-modal-button"
        onClick={() => setToggleModal()}
      >
        &times;
      </button>
      <div className="modal-card">
        <img
          src="https://www.superherodb.com/pictures2/portraits/10/100/768.jpg"
          alt="illustration du modal"
          className="modal-img"
        />
      </div>
      <div className="hero-infos">
        <div className="hero-stats">
          <HeroStats />
        </div>
        <div className="hero-bio">
          <HeroBio />
        </div>
      </div>
    </div>
  );
};
ModalInfo.propTypes = {
  setToggleModal: PropTypes.func.isRequired,
};
export default ModalInfo;
