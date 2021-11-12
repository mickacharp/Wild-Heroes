import { useState } from 'react';
import Navbar from '../Navbar/NavBar';
import QuizGame from './QuizGame';
import CardsQuiz from './CardsQuiz';

const Quiz = () => {
  const [chooseCard, setChooseCard] = useState(true);
  return (
    <div>
      <Navbar />
      <CardsQuiz setChooseCard={setChooseCard} chooseCard={chooseCard} />
      <QuizGame />
    </div>
  );
};

export default Quiz;
