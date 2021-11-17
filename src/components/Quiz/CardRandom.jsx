import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const CardRandom = ({ hero, setChooseCard }) => {
  const image = [];
  const name = [];
  hero.map((el) => image.push(el.image.url));
  hero.map((el) => name.push(el.name));
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(Math.floor(Math.random() * 732));
    }, 150);

    return () => {
      clearInterval(interval);
    };
  }, [counter]);
  return (
    <div className="container-card-random">
      <h1 className="card-random-explication">
        Click on the card to choose 10 random challengers, if your answer is
        correct you eliminate one challenger, good game !!!
      </h1>
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
    </div>
  );
};

CardRandom.propTypes = {
  hero: PropTypes.arrayOf(PropTypes.object).isRequired,
  setChooseCard: PropTypes.func.isRequired,
};
export default CardRandom;
