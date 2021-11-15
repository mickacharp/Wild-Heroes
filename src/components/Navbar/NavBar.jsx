import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../img/Logo.png';
import './navbar.css';

const Navbar = () => {
  return (
    <header className="header">
      <div className="header-content">
        <a exact href="/wild-heroes/" className="logo-content">
          <img src={logo} className="logo" alt="Logo" />
        </a>
        <div className="title">
          <h1>WILD HEROES</h1>
        </div>
        <div className="header-content-link">
          <NavLink
            activeClassName="text-nav-active"
            className="text-nav"
            exact
            to="/quiz"
          >
            <h3>Quiz</h3>
          </NavLink>
          <NavLink
            activeClassName="text-nav-active"
            className="text-nav"
            exact
            to="/informations"
          >
            <h3>Information</h3>
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
