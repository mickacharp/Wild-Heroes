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
  fullName,
  placeOfBirth,
  firstAppearance,
  groupAffiliation,
}) => {
  // gathering keys and values of the 'stats' object and putting it in a 'statsArray' array
  const statsNamesArray = Object.keys(stats);
  const statsValuesArray = Object.values(stats);

  const statsArray = [];
  for (let i = 0; i < statsNamesArray.length; i += 1) {
    statsArray.push(statsNamesArray[i].toUpperCase());
    statsArray.push(statsValuesArray[i]);
  }
  const headerClass = (ali) => {
    let headerAliClass = '';
    if (ali === 'good') {
      headerAliClass = 'good-hero';
    } else if (ali === 'bad') {
      headerAliClass = 'bad-hero';
    } else {
      headerAliClass = 'neutral-hero';
    }
    return headerAliClass;
  };

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

      <div className={`modal-content ${headerClass(alignment)}`}>
        <button
          type="button"
          className="close-modal-button"
          onClick={() => hideModal()}
        >
          &times;
        </button>
        <div className={`modal-header ${headerClass(alignment)}`}>
          <h1>{name}</h1>
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
            <h1>Information</h1>
            <ul className="bio-list">
              {fullName !== '' ? (
                <li>
                  {' '}
                  <strong>
                    Full name
                    <br />
                  </strong>{' '}
                  {fullName}{' '}
                </li>
              ) : (
                ''
              )}
              {gender !== '-' ? (
                <li>
                  {' '}
                  <strong>
                    Gender
                    <br />
                  </strong>{' '}
                  {gender}{' '}
                </li>
              ) : (
                ''
              )}
              {race !== 'null' ? (
                <li>
                  {' '}
                  <strong>
                    Race
                    <br />
                  </strong>{' '}
                  {race}{' '}
                </li>
              ) : (
                ''
              )}
              {weight !== '0 kg' && height !== '0 cm' ? (
                <li>
                  {' '}
                  <strong>
                    Weight and height
                    <br />
                  </strong>{' '}
                  {weight}, {height}{' '}
                </li>
              ) : (
                ''
              )}
              {placeOfBirth !== '-' ? (
                <li>
                  {' '}
                  <strong>
                    Place of birth
                    <br />
                  </strong>{' '}
                  {placeOfBirth}{' '}
                </li>
              ) : (
                ''
              )}
              {publisher !== 'null' && publisher !== '' ? (
                <li>
                  {' '}
                  <strong>
                    Original publisher
                    <br />
                  </strong>{' '}
                  {publisher}{' '}
                </li>
              ) : (
                ''
              )}
              {firstAppearance !== '-' ? (
                <li>
                  {' '}
                  <strong>
                    First appearance
                    <br />
                  </strong>{' '}
                  {firstAppearance}{' '}
                </li>
              ) : (
                ''
              )}
              {groupAffiliation !== '-' ? (
                <li>
                  {' '}
                  <strong>
                    Affiliation
                    <br />
                  </strong>{' '}
                  {groupAffiliation}{' '}
                </li>
              ) : (
                ''
              )}
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
  fullName: PropTypes.string.isRequired,
  placeOfBirth: PropTypes.string.isRequired,
  firstAppearance: PropTypes.string.isRequired,
  groupAffiliation: PropTypes.string.isRequired,
};
export default ModalInfo;
