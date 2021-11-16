import { useState } from 'react';
import Navbar from '../Navbar/NavBar';
import QuizGame from './QuizGame';
import CardsQuiz from './CardsQuiz';
import QuizResult from './QuizResult';

const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [chooseCard, setChooseCard] = useState(true);
  const [numberQuestion, setNumberQuestion] = useState(1);
  const [score, setScore] = useState(0);

  return (
    <div>
      <Navbar />
      {numberQuestion < 11 && (
        <CardsQuiz
          setChooseCard={setChooseCard}
          chooseCard={chooseCard}
          index={index}
        />
      )}
      {!chooseCard && numberQuestion < 11 && (
        <QuizGame
          index={index}
          setIndex={setIndex}
          numberQuestion={numberQuestion}
          setNumberQuestion={setNumberQuestion}
          score={score}
          setScore={setScore}
        />
      )}
      {numberQuestion > 10 && (
        <QuizResult
          score={score}
          setNumberQuestion={setNumberQuestion}
          setScore={setScore}
        />
      )}
    </div>
  );
};

export default Quiz;
