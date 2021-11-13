import { useState } from 'react';
import Navbar from '../Navbar/NavBar';
import QuizGame from './QuizGame';
import CardsQuiz from './CardsQuiz';

const Quiz = () => {
  const [chooseCard, setChooseCard] = useState(true);
  const index = 0;
  return (
    <div>
      <Navbar />
      <CardsQuiz
        setChooseCard={setChooseCard}
        chooseCard={chooseCard}
        index={index}
      />
      <QuizGame index={index} />
    </div>
  );
};

export default Quiz;
