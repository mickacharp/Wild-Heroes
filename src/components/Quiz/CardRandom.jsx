import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './cardQuiz.css';

const CardRandom = ({ hero, setChooseCard }) => {
  const image = [];
  const name = [];
  const heroRandom = [];
  heroRandom.push(hero[Math.floor(Math.random() * 732)]);
  hero.map((el) => image.push(el.image.url));
  hero.map((el) => name.push(el.name));
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(Math.floor(Math.random() * 732));
    }, 200);

    return () => {
      clearInterval(interval);
    };
  }, [counter]);
  return (
    <>
      <div
        className="card-random"
        role="button"
        onClick={() => setChooseCard(false)}
        onKeyPress={() => setChooseCard(false)}
        tabIndex={0}
      >
        <h2>Choose your challenger</h2>
        <img src={image[counter]} alt={name[counter]} />
      </div>
    </>
  );
};

CardRandom.propTypes = {
  hero: PropTypes.arrayOf(PropTypes.object).isRequired,
  setChooseCard: PropTypes.func.isRequired,
};
export default CardRandom;
