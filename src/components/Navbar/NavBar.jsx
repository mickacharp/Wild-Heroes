import React from 'react';
import { NavLink } from 'react-router-dom';
import img from '../../img/Logo.png';
import './navbar.css';

const Navbar = () => {
  return (
    <header className="header">
      <div className="header-content">
        <a href="/wild-heroes" className="logo-content">
          <img src={img} className="logo" alt="Logo" />
        </a>
        <h1>WILD HEROES</h1>
        <div className="header-content-link">
          <NavLink
            activeClassName="active"
            className="text-nav"
            to="/wild-heroes/Quiz"
          >
            Quiz
          </NavLink>
          <NavLink
            activeClassName="text-nav-active"
            className="text-nav"
            to="/wild-heroes/Informations"
          >
            Informations
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
