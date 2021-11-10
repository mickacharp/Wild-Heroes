import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ setFilter, filter, response }) => {
  return (
    <div className="boxes">
      <select
        className="comics-filter"
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value=""> {filter} </option>
        {response.map((element) => (
          <option key={element.id} value={element.name}>
            {element.name}
          </option>
        ))}
      </select>
    </div>
  );
};

Filter.propTypes = {
  setFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  response: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Filter;
