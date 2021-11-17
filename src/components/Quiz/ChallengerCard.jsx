import { useState } from 'react';
import PropTypes from 'prop-types';
import imgReplace from '../../img/interrogation.png';
import ModalInfo from '../Informations/ModalInfo';
import './cardQuiz.css';

const ChallengerCard = ({ hero, index, score }) => {
  const [heroRandom] = useState([]);
  heroRandom.push(hero[Math.floor(Math.random() * 732)]);
  const [toggleModal, setToggleModal] = useState('');
  const hideModal = () => setToggleModal(!toggleModal);
  const challenger = 10 - score;

  return (
    <div className="container-card-quiz">
      <h1>Challenger:{challenger}/10</h1>
      <div
        className="card-quiz"
        onClick={() => hideModal()}
        onKeyPress={() => hideModal()}
        role="button"
        tabIndex={index}
      >
        <img
          src={heroRandom[index].image.url}
          alt={heroRandom[index].name}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = imgReplace;
          }}
        />
        <h2>{heroRandom[index].name}</h2>
      </div>
      <div>
        {toggleModal && (
          <ModalInfo
            name={heroRandom[index].name}
            image={heroRandom[index].image.url}
            toggleModal={toggleModal}
            setToggleModal={setToggleModal}
            hideModal={hideModal}
            alignment={heroRandom[index].biography.alignment}
            stats={heroRandom[index].powerstats}
            publisher={heroRandom[index].biography.publisher}
            gender={heroRandom[index].appearance.gender}
            race={heroRandom[index].appearance.race}
            weight={heroRandom[index].appearance.weight[1]}
            height={heroRandom[index].appearance.height[1]}
            fullName={heroRandom[index].biography['full-name']}
            placeOfBirth={heroRandom[index].biography['place-of-birth']}
            firstAppearance={heroRandom[index].biography['first-appearance']}
            groupAffiliation={
              heroRandom[index].connections['group-affiliation']
            }
          />
        )}
      </div>
    </div>
  );
};

ChallengerCard.propTypes = {
  hero: PropTypes.arrayOf(PropTypes.object).isRequired,
  index: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
};
export default ChallengerCard;
