import React from 'react';
import './home.css';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className="App">
      <div className="img">
        <div className="main-title-home">
          <h1>Wild Heroes</h1>
        </div>
        <NavLink className="img-text-left" exact to="/quiz">
          <div className="img-left" />
          <div className="text-left">
            <h2 className="title-home">Quiz</h2>
          </div>
        </NavLink>
        <NavLink className="img-text-right" exact to="/informations">
          <div className="img-right" />
          <div className="text-right">
            <h2 className="title-home">Informations</h2>
          </div>
        </NavLink>
      </div>
    </div>
  );
};
export default Home;
