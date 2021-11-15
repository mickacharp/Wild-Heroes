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
  const [nextQuestion, setNextQuestion] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const shuffleArray = (array) => {
      const array2 = array;
      for (let i = array.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array2[i];
        array2[i] = array2[j];
        array2[j] = temp;
      }
    };

    const getQuestions = async () => {
      const results = await axios.get(
        'https://opentdb.com/api.php?amount=1&category=29'
      );
      const questionsList = [];
      setIsLoading(false);
      questionsList.push(
        results.data.results.map((el) => {
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

          shuffleArray(answers);
          question.answers = answers;
          return question;
        })
      );
      setQuestions(questionsList[0]);
    };

    getQuestions();
  }, [nextQuestion]);

  const handleNextQuestion = () => {
    setNextQuestion(!nextQuestion);
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
          {questions.map((question) => (
            <QuizQuestion
              question={question.question}
              answers={question.answers}
              key={question.question}
              handleNextQuestion={handleNextQuestion}
              index={index}
              setIndex={setIndex}
              numberQuestion={numberQuestion}
              setNumberQuestion={setNumberQuestion}
              score={score}
              setScore={setScore}
            />
          ))}
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
