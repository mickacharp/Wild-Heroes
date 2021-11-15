import { useState } from 'react';
import Navbar from '../Navbar/NavBar';
import QuizGame from './QuizGame';
import CardsQuiz from './CardsQuiz';

const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [chooseCard, setChooseCard] = useState(true);

  return (
    <div>
      <Navbar />
      <CardsQuiz
        setChooseCard={setChooseCard}
        chooseCard={chooseCard}
        index={index}
      />
      <QuizGame index={index} setIndex={setIndex} />
    </div>
  );
};

export default Quiz;
