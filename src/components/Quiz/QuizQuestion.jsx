import React, { useState } from 'react';
import './quizQuestion.css';
import PropTypes from 'prop-types';

const QuizQuestion = ({ question, answers, handleNextQuestion }) => {
  const [answerGiven, setAnswerGiven] = useState(false);

  function styleAnswer(correctAnswer) {
    let colorAnswer = {};
    if (answerGiven) {
      if (correctAnswer) {
        colorAnswer = { backgroundColor: 'lightgreen' };
      } else {
        colorAnswer = { backgroundColor: 'grey' };
      }
    } else {
      colorAnswer = { backgroundColor: 'lightgrey' };
    }
    return colorAnswer;
  }
  return (
    <div className="quiz">
      <div className="quiz_question">{question}</div>
      <ul className="quiz_answers">
        {answers.map((el) => (
          <li
            key={el.text}
            role="presentation"
            className="quiz_answer"
            onClick={() => {
              setAnswerGiven(true);
              setTimeout(() => {
                handleNextQuestion();
              }, 3000);
            }}
            style={styleAnswer(el.correct)}
          >
            {el.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

QuizQuestion.propTypes = {
  question: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleNextQuestion: PropTypes.func.isRequired,
};

export default QuizQuestion;
