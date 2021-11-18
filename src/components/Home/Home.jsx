import React, { useState } from 'react';
import './home.css';
import { NavLink } from 'react-router-dom';

const Home = () => {
  const [paragraphInfo, setParagraphInfo] = useState(false);
  const [paragraphQuiz, setParagraphQuiz] = useState(false);

  const brightenSelection = (selectedPart) => {
    let futureClassName = '';
    if (selectedPart) {
      futureClassName = 'brightened';
    }
    return futureClassName;
  };

  return (
    <div className="home-container">
      <div className="main-title-container">
        <h1>Wild Heroes</h1>
      </div>
      <NavLink
        className="img-text-left"
        exact
        to="/quiz"
        onMouseEnter={() => setParagraphQuiz(true)}
        onMouseLeave={() => setParagraphQuiz(false)}
      >
        <div className={`left-container ${brightenSelection(paragraphQuiz)}`} />
        <div className="text-left">
          <h2 className="subtitles-home">Quiz</h2>
          {paragraphQuiz && (
            <p className="paragraph-home">
              Save the world! <br /> Battle against your favorite heroes!
            </p>
          )}
        </div>
      </NavLink>
      <NavLink
        className="img-text-right"
        exact
        to="/informations"
        onMouseEnter={() => setParagraphInfo(true)}
        onMouseLeave={() => setParagraphInfo(false)}
      >
        <div
          className={`right-container ${brightenSelection(paragraphInfo)}`}
        />
        <div className="text-right">
          <h2 className="subtitles-home">Information</h2>
          {paragraphInfo && (
            <p className="paragraph-home">
              Consult characters stats <br /> (comics, movies, ...)
            </p>
          )}
        </div>
      </NavLink>
    </div>
  );
};
export default Home;
