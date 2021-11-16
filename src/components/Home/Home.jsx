import React, { useState } from 'react';
import './home.css';
import { NavLink } from 'react-router-dom';

const Home = () => {
  const [paragraphInfo, setParagraphInfo] = useState(false);
  const [paragraphQuiz, setParagraphQuiz] = useState(false);

  return (
    <div className="App">
      <div className="img">
        <div className="main-title-home">
          <h1>Wild Heroes</h1>
        </div>
        <NavLink className="img-text-left" exact to="/quiz">
          <div
            className="img-left"
            onMouseEnter={() => setParagraphQuiz(true)}
            onMouseLeave={() => setParagraphQuiz(false)}
          />
          <div className="text-left">
            <h2 className="title-home">Quiz</h2>
            {paragraphQuiz && (
              <p className="paragraph-home">Play with your favorite heroes!</p>
            )}
          </div>
        </NavLink>
        <NavLink className="img-text-right" exact to="/informations">
          <div
            className="img-right"
            onMouseEnter={() => setParagraphInfo(true)}
            onMouseLeave={() => setParagraphInfo(false)}
          />
          <div className="text-right">
            <h2 className="title-home">Information</h2>
            {paragraphInfo && (
              <p className="paragraph-home" id="textRight">
                Consult characters stats (BD, comics, ...)
              </p>
            )}
          </div>
        </NavLink>
      </div>
    </div>
  );
};
export default Home;
