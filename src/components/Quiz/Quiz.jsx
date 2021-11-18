import { useState } from 'react';
import Navbar from '../Navbar/NavBar';
import QuizGame from './QuizGame';
import CardsQuiz from './CardsQuiz';
import QuizResult from './QuizResult';
import StepProgressBar from './ProgressBar';
import BtrGame from './BtrGame';

const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [chooseCard, setChooseCard] = useState(true);
  const [numberQuestion, setNumberQuestion] = useState(1);
  const [score, setScore] = useState(0);
  const [chooseGame, setChooseGame] = useState(true);
  const [normalGame, setNormalGame] = useState(false);
  const [btr, setBtr] = useState(false);

  return (
    <div className="container-quiz">
      <Navbar />
      {chooseGame && (
        <div className="container-btn-game">
          <button
            type="button"
            onClick={() => {
              setChooseGame(false);
              setNormalGame(true);
            }}
          >
            Normal Game
          </button>
          <button
            type="button"
            onClick={() => {
              setChooseGame(false);
              setBtr(true);
            }}
          >
            Beat The Riddler
          </button>
        </div>
      )}
      {normalGame && <StepProgressBar score={score} />}
      {normalGame && !chooseCard && numberQuestion < 11 && (
        <QuizGame
          index={index}
          setIndex={setIndex}
          numberQuestion={numberQuestion}
          setNumberQuestion={setNumberQuestion}
          score={score}
          setScore={setScore}
        />
      )}
      {normalGame && numberQuestion < 11 && (
        <CardsQuiz
          score={score}
          setScore={setScore}
          setChooseCard={setChooseCard}
          chooseCard={chooseCard}
          index={index}
        />
      )}
      {btr && (
        <BtrGame
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
