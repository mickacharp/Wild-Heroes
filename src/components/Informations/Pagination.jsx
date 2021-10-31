import React from 'react';
import PropTypes from 'prop-types';
import './pagination.css';

const Pagination = ({ cardsPerPage, totalCards, paginate, currentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i += 1) {
    pageNumbers.push(i);
  }
  return (
    <nav className="nav-page">
      <p> {cardsPerPage < 31 ? `Page: ${currentPage}` : ''}</p>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            {cardsPerPage < 31 ? (
              <input
                to="/"
                value={number}
                type="button"
                onClick={() => {
                  paginate(number);
                }}
                className="page-link"
              />
            ) : (
              ''
            )}
          </li>
        ))}
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
