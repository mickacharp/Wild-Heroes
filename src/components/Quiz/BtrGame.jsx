import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import BtrQuestions from './BtrQuestions';

const BtrGame = ({
  index,
  setIndex,
  numberQuestion,
  setNumberQuestion,
  score,
  setScore,
}) => {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [indexQuestion, setIndexQuestion] = useState(0);

  const shuffleArray = (array) => {
    const array2 = array;
    for (let i = array.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array2[i];
      array2[i] = array2[j];
      array2[j] = temp;
    }
  };

  useEffect(() => {
    const getQuestions = async () => {
      const resultsComicsHard = await axios.get(
        'https://opentdb.com/api.php?amount=2&category=29&difficulty=hard'
      );
      const resultsFilmHard = await axios.get(
        'https://opentdb.com/api.php?amount=2&category=11@difficulty=hard'
      );
      const resultsGamesHard = await axios.get(
        'https://opentdb.com/api.php?amount=2&category=15&difficulty=hard'
      );
      const resultsMangaHard = await axios.get(
        'https://opentdb.com/api.php?amount=2&category=31&difficulty=hard'
      );

      const results = [
        ...resultsFilmHard.data.results,
        ...resultsComicsHard.data.results,
        ...resultsGamesHard.data.results,
        ...resultsMangaHard.data.results,
      ];

      // Shuffle the questions to display a random theme
      shuffleArray(results);

      const questionsList = [];
      questionsList.push(
        results.map((el) => {
          let answers = [];
          const parser = new DOMParser();
          const question = {
            question: parser.parseFromString(el.question, 'text/html')
              .documentElement.textContent,
          };

          answers = [
            {
              text: parser.parseFromString(el.correct_answer, 'text/html')
                .documentElement.textContent,
              correct: true,
            },
          ];

          for (let i = 0; i < el.incorrect_answers.length; i += 1) {
            answers.push({
              text: parser.parseFromString(el.incorrect_answers[i], 'text/html')
                .documentElement.textContent,
            });
          }

          // Shuffle answers
          shuffleArray(answers);
          question.answers = answers;

          return question;
        })
      );
      setQuestions(questionsList[0]);
      setIsLoading(false);
    };

    getQuestions();
  }, []);

  const newQuestion = () => {
    setIndexQuestion(indexQuestion + 1);
  };
  return (
    <div className="quiz-game-container">
      {isLoading ? (
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/da734b28921021.55d95297d71f4.gif"
          alt="loader"
          className="loader-cardsList"
        />
      ) : (
        <div className="App">
          <BtrQuestions
            question={questions[indexQuestion].question}
            answers={questions[indexQuestion].answers}
            key={questions[indexQuestion].question}
            index={index}
            setIndex={setIndex}
            numberQuestion={numberQuestion}
            setNumberQuestion={setNumberQuestion}
            score={score}
            setScore={setScore}
            newQuestion={newQuestion}
          />
        </div>
      )}
    </div>
  );
};

BtrGame.propTypes = {
  index: PropTypes.number.isRequired,
  setIndex: PropTypes.func.isRequired,
  numberQuestion: PropTypes.number.isRequired,
  setNumberQuestion: PropTypes.func.isRequired,
  score: PropTypes.number.isRequired,
  setScore: PropTypes.func.isRequired,
};

export default BtrGame;
