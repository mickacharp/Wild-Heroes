import React from 'react';
import PropTypes from 'prop-types';
import './quizResult.css';

const QuizResult = ({ score }) => {
  return (
    <div className="quiz-result">
      {score < 5 && (
        <div className="result">
          <h2>Score: {score}/10</h2>
          <p>You&apos;re a LOSER !</p>
        </div>
      )}
      {score === 5 && (
        <div className="result">
          <h2>Score: {score}/10</h2>
          <p>Draw...</p>
        </div>
      )}
      {score > 5 && score < 10 && (
        <div className="result">
          <h2>Score: {score}/10</h2>
          <p>Congrats you&apos;re a BOSS !</p>
        </div>
      )}
      {score === 10 && (
        <div className="result">
          <h2>Score: {score}/10</h2>
          <p>Waouh !! You&apos;re my HERO !</p>
        </div>
      )}
      <button
        type="button"
        className="btn-result"
        onClick={() => window.location.reload(false)}
      >
        Play Again
      </button>
    </div>
  );
};

QuizResult.propTypes = {
  score: PropTypes.number.isRequired,
};

export default QuizResult;
