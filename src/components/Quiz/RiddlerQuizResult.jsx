import React from 'react';
import PropTypes from 'prop-types';
import './riddlerQuizResult.css';

const RiddlerQuizResult = ({ score }) => {
  return (
    <div className="riddler-quiz-result">
      {score === 0 && (
        <div className="riddler-result">
          <h2>Score: {score}/10</h2>
          <p>Like ice, you are a zero...</p>
        </div>
      )}
      {score === 1 && (
        <div className="riddler-result">
          <h2>Score: {score}/10</h2>
          <p>Beaten by this crappy bird ? Really ? You are so stupid...</p>
        </div>
      )}
      {score === 2 && (
        <div className="riddler-result">
          <h2>Score: {score}/10</h2>
          <p>I guess Deathstroke is as smart as he is strong.</p>
        </div>
      )}
      {score === 3 && (
        <div className="riddler-result">
          <h2>Score: {score}/10</h2>
          <p>
            Don&apos;t be too scared. This scarecrow is not a real one, you
            know.
          </p>
        </div>
      )}
      {score === 4 && (
        <div className="riddler-result">
          <h2>Score: {score}/10</h2>
          <p>
            Not surprising, plants don&apos;t have brain... I let you imagine
            how stupid you are...
          </p>
        </div>
      )}
      {score === 5 && (
        <div className="riddler-result">
          <h2>Score: {score}/10</h2>
          <p>
            Draw... Well, you can use the two personnalities of Harvey as an
            excuse for your loss...
          </p>
        </div>
      )}
      {score === 6 && (
        <div className="riddler-result">
          <h2>Score: {score}/10</h2>
          <p>
            Who would believe this crazy chick was that smart? Not me, for sure.
          </p>
        </div>
      )}
      {score === 7 && (
        <div className="riddler-result">
          <h2>Score: {score}/10</h2>
          <p>Bane is as smart as he is strong. So, congrats, I guess.</p>
        </div>
      )}
      {score === 8 && (
        <div className="riddler-result">
          <h2>Score: {score}/10</h2>
          <p>Sorry, the league of shadows is smarter than you.</p>
        </div>
      )}
      {score === 9 && (
        <div className="riddler-result">
          <h2>Score: {score}/10</h2>
          <p>Ha! Ha! Ha! Ha! Ha!</p>
        </div>
      )}
      {score === 10 && (
        <div className="riddler-result">
          <h2>Score: {score}/10</h2>
          <p>
            No, no, no! It can&apos;t be true! Cheater! You cheated! I know you
            cheated!
          </p>
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
