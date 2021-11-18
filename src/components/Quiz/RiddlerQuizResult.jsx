import React from 'react';
import PropTypes from 'prop-types';
import './quizResult.css';

const RiddlerQuizResult = ({ score }) => {
  return (
    <div className="riddler-quiz-result">
      {score === 0 && (
        <div className="riddler-result">
          <h2>Score: {score}/10</h2>
          <p>Like Robin, you&apos;re a LOSER !</p>
        </div>
      )}
      {score === 1 && (
        <div className="riddler-result">
          <h2>Score: {score}/10</h2>
          <p>Well, Gotham City will have to save itself...</p>
        </div>
      )}
      {score === 2 && (
        <div className="riddler-result">
          <h2>Score: {score}/10</h2>
          <p>America would be ashamed of you...</p>
        </div>
      )}
      {score === 3 && (
        <div className="riddler-result">
          <h2>Score: {score}/10</h2>
          <p>Meh... You&apos;re fast but a bit useless...</p>
        </div>
      )}
      {score === 4 && (
        <div className="riddler-result">
          <h2>Score: {score}/10</h2>
          <p>Did Uncle Ben die for nothing ?</p>
        </div>
      )}
      {score === 5 && (
        <div className="riddler-result">
          <h2>Score: {score}/10</h2>
          <p>Draw... But at least, you are Iron-man!</p>
        </div>
      )}
      {score === 6 && (
        <div className="riddler-result">
          <h2>Score: {score}/10</h2>
          <p>You&apos;re as good as the God of Thunder!</p>
        </div>
      )}
      {score === 7 && (
        <div className="riddler-result">
          <h2>Score: {score}/10</h2>
          <p>You are as sexy as Wonder Woman, congrats!</p>
        </div>
      )}
      {score === 8 && (
        <div className="riddler-result">
          <h2>Score: {score}/10</h2>
          <p>I am tired of good players like you. Congrats.</p>
        </div>
      )}
      {score === 9 && (
        <div className="riddler-result">
          <h2>Score: {score}/10</h2>
          <p>Nice! You can go one on one versus Superman!</p>
        </div>
      )}
      {score === 10 && (
        <div className="riddler-result">
          <h2>Score: {score}/10</h2>
          <p>You smash! The true hero, it&apos;s you!</p>
        </div>
      )}
      <button
        type="button"
        className="riddler-btn-result"
        onClick={() => window.location.reload(false)}
      >
        Play Again
      </button>
    </div>
  );
};

RiddlerQuizResult.propTypes = {
  score: PropTypes.number.isRequired,
};

export default RiddlerQuizResult;
