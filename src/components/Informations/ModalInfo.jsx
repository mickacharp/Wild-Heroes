import React from 'react';
import PropTypes from 'prop-types';
import HeroStats from './HeroStats';
import HeroBio from './HeroBio';
import './modalinfo.css';

const ModalInfo = ({ hideModal, image, name }) => {
  return (
    <div className="modal">
      <input
        type="button"
        className="close-modal-button"
        onClick={() => hideModal()}
      />
      &times;
      <div className="modal-card">
        <img src={image} alt={name} className="modal-img" />
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
  hideModal: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default ModalInfo;
