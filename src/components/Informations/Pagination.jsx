import React from 'react';
import PropTypes from 'prop-types';
import './pagination.css';
import { NavLink } from 'react-router-dom';

const Pagination = ({ cardsPerPage, totalCards, paginate, currentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i += 1) {
    pageNumbers.push(i);
  }
  return (
    <nav className="nav-page">
      <p> {totalCards > 21 && `Page: ${currentPage}`}</p>
      <ul className="pagination">
        {pageNumbers.map(
          (number) =>
            totalCards > 21 && (
              <NavLink
                key={number}
                value={number}
                to="/informations"
                className="page-link"
                onClick={() => {
                  paginate(number);
                }}
              >
                {number}
              </NavLink>
            )
        )}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  cardsPerPage: PropTypes.number.isRequired,
  totalCards: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default Pagination;
