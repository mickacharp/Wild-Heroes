import { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import CardRandom from './CardRandom';
import ChallengerCard from './ChallengerCard';
import './cardQuiz.css';

const CardsQuiz = ({ setChooseCard, chooseCard, index, score }) => {
  const [hero, setHero] = useState([]);

  // Call the api and load image to waiting call
  useEffect(() => {
    const fetchData = async () => {
      axios
        .get("https://superheroapi.com/api.php/10216027606921557/search/'%20'")
        .then((response) => response.data.results)
        .then((data) => {
          setHero(data);
        });
    };
    fetchData();
  }, []);
  return (
    <div className="card-list">
      {chooseCard ? (
        <CardRandom hero={hero} setChooseCard={setChooseCard} />
      ) : (
        <ChallengerCard hero={hero} index={index} score={score} />
      )}
    </div>
  );
};

CardsQuiz.propTypes = {
  chooseCard: PropTypes.bool.isRequired,
  setChooseCard: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
};

export default CardsQuiz;
