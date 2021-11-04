import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ setFilter, filter, response }) => {
  return (
    <div className="boxes">
      <select
        className="comics-filter"
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="">- {filter} -</option>
        {response.map((element) => (
          <option value={element}>{element}</option>
        ))}
      </select>
    </div>
  );
};

Filter.propTypes = {
  setFilter: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired,
  response: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Filter;
