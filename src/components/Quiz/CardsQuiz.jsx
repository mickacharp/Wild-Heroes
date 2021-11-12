import { useState } from 'react';
import PropTypes from 'prop-types';
import CardRandom from './CardRandom';
import ChallengerCard from './ChallengerCard';
import './cardQuiz.css';

const CardsQuiz = ({ hero }) => {
  const [chooseCard, setChooseCard] = useState(true);
  return (
    <div className="card-list">
      {chooseCard ? (
        <CardRandom hero={hero} setChooseCard={setChooseCard} />
      ) : (
        <ChallengerCard hero={hero} />
      )}
    </div>
  );
};
CardsQuiz.propTypes = {
  hero: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default CardsQuiz;
