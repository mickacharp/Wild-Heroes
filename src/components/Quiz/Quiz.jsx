import { useState } from 'react';
import QuizGame from './QuizGame';
import CardsQuiz from './CardsQuiz';

const Quiz = () => {
  const [chooseCard, setChooseCard] = useState(true);
  return (
    <div>
      <CardsQuiz setChooseCard={setChooseCard} chooseCard={chooseCard} />
      <QuizGame />
    </div>
  );
};

export default Quiz;
