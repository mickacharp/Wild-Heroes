import React from 'react';
import PropTypes from 'prop-types';
import './modalinfo.css';

const ModalInfo = ({
  hideModal,
  image,
  name,
  alignment,
  stats,
  publisher,
  gender,
  race,
  weight,
  height,
}) => {
  // gathering keys and values of the 'stats' object and putting it in a 'statsArray' array
  const statsNamesArray = Object.keys(stats);
  const statsValuesArray = Object.values(stats);
  const statsArray = [];
  for (let i = 0; i < statsNamesArray.length; i += 1) {
    statsArray.push(
      `${statsNamesArray[i].toUpperCase()}: ${statsValuesArray[i]}`
    );
  }
  return (
    <div className="modal-container">
      <div
        className="modal-background"
        onClick={() => hideModal()}
        onKeyPress={() => hideModal()}
        role="button"
        tabIndex={0}
      >
        {' '}
      </div>

      <div className="modal-content">
        <button
          type="button"
          className="close-modal-button"
          onClick={() => hideModal()}
        >
          &times;
        </button>
        <div className="modal-header">
          <h1>
            {name} ({alignment})
          </h1>
        </div>
        <div className="modal-body">
          <div className="modal-card">
            <img src={image} alt={name} className="modal-img" />
          </div>
          <div className="modal-stats">
            <h1>Statistics</h1>
            <ul className="stats-list">
              {statsArray.map((stat) => (
                <li>
                  {stat.includes('null')
                    ? stat.replace('null', 'Unknown')
                    : stat}
                </li>
              ))}
            </ul>
          </div>
          <div className="modal-bio">
            <h1>Identity</h1>
            <ul className="bio-list">
              <li>Original publisher: {publisher}</li>
              <li>Gender: {gender}</li>
              <li>
                Race: {race === 'null' ? race.replace('null', 'Unknown') : race}
              </li>
              <li>
                Weight and height: {weight === '0 kg' ? 'Unknown' : weight}
                {height === '0 cm' ? '' : `, ${height}`}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
ModalInfo.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
  hideModal: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  alignment: PropTypes.string.isRequired,
  publisher: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  race: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};
export default ModalInfo;
