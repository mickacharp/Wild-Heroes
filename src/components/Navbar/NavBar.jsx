import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../img/Logo.png';
import './navbar.css';

const Navbar = () => {
  return (
    <header className="header">
      <div className="header-content">
        <NavLink to="/" className="logo-content">
          <img src={logo} className="logo" alt="Logo" />
        </NavLink>
        <div className="title">
          <h1>WILD HEROES</h1>
        </div>
        <div className="header-content-link">
          <NavLink
            activeClassName="text-nav-active"
            className="text-nav"
            to="/quiz"
          >
            Quiz
          </NavLink>
          <NavLink
            activeClassName="text-nav-active"
            className="text-nav"
            to="/informations"
          >
            Informations
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
