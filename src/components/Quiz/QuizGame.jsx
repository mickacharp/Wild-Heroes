import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import QuizQuestion from './QuizQuestion';

const QuizGame = ({
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
      const resultsComicsEasy = await axios.get(
        'https://opentdb.com/api.php?amount=2&category=29&difficulty=easy'
      );
      const resultsFilmEasy = await axios.get(
        'https://opentdb.com/api.php?amount=2&category=11@difficulty=easy'
      );
      const resultsGamesEasy = await axios.get(
        'https://opentdb.com/api.php?amount=2&category=15&difficulty=easy'
      );
      const resultsMangaEasy = await axios.get(
        'https://opentdb.com/api.php?amount=2&category=31&difficulty=easy'
      );
      const resultsComicsMedium = await axios.get(
        'https://opentdb.com/api.php?amount=2&category=29&difficulty=medium'
      );
      const resultsFilmMedium = await axios.get(
        'https://opentdb.com/api.php?amount=2&category=11&difficulty=medium'
      );
      const resultsGamesMedium = await axios.get(
        'https://opentdb.com/api.php?amount=2&category=15&difficulty=medium'
      );
      const resultsMangaMedium = await axios.get(
        'https://opentdb.com/api.php?amount=4&category=31&difficulty=medium'
      );

      const results = [
        ...resultsFilmEasy.data.results,
        ...resultsComicsEasy.data.results,
        ...resultsGamesEasy.data.results,
        ...resultsMangaEasy.data.results,
        ...resultsFilmMedium.data.results,
        ...resultsComicsMedium.data.results,
        ...resultsGamesMedium.data.results,
        ...resultsMangaMedium.data.results,
      ];

      // Shuffle the questions to display a random theme
      shuffleArray(results);
      console.log(results);
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
          <QuizQuestion
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

QuizGame.propTypes = {
  index: PropTypes.number.isRequired,
  setIndex: PropTypes.func.isRequired,
  numberQuestion: PropTypes.number.isRequired,
  setNumberQuestion: PropTypes.func.isRequired,
  score: PropTypes.number.isRequired,
  setScore: PropTypes.func.isRequired,
};

export default QuizGame;
