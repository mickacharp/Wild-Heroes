import { useState } from 'react';
import PropTypes from 'prop-types';
import imgReplace from '../../img/interrogation.png';
import ModalInfo from '../Informations/ModalInfo';
import './cardQuiz.css';

const ChallengerCard = ({ hero }) => {
  const [heroRandom] = useState([]);
  heroRandom.push(hero[Math.floor(Math.random() * 732)]);
  const [toggleModal, setToggleModal] = useState('');
  const hideModal = () => setToggleModal(!toggleModal);

  return (
    <div>
      <div
        className="card-quiz"
        onClick={() => hideModal()}
        onKeyPress={() => hideModal()}
        role="button"
        tabIndex={0}
      >
        <img
          src={heroRandom[0].image.url}
          alt={heroRandom[0].name}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = imgReplace;
          }}
        />
        <h2>{heroRandom[0].name}</h2>
      </div>
      <div>
        {toggleModal && (
          <ModalInfo
            name={heroRandom[0].name}
            image={heroRandom[0].image.url}
            toggleModal={toggleModal}
            setToggleModal={setToggleModal}
            hideModal={hideModal}
            alignment={heroRandom[0].biography.alignment}
            stats={heroRandom[0].powerstats}
            publisher={heroRandom[0].biography.publisher}
            gender={heroRandom[0].appearance.gender}
            race={heroRandom[0].appearance.race}
            weight={heroRandom[0].appearance.weight[1]}
            height={heroRandom[0].appearance.height[1]}
            fullName={heroRandom[0].biography['full-name']}
            placeOfBirth={heroRandom[0].biography['place-of-birth']}
            firstAppearance={heroRandom[0].biography['first-appearance']}
            groupAffiliation={heroRandom[0].connections['group-affiliation']}
          />
        )}
      </div>
    </div>
  );
};

ChallengerCard.propTypes = {
  hero: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default ChallengerCard;
