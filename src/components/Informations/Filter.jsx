import { useState } from 'react';
import PropTypes from 'prop-types';
import img from '../../img/Logo.png';

const Filter = ({ setFilter, filter, response }) => {
  const [select, setselect] = useState(false);
  console.log(select);
  return (
    <div className="boxes">
      <img
        className="logo-filter"
        src={img}
        alt={filter}
        onMouseEnter={() => setselect(true)}
        onMouseLeave={() => setselect(false)}
      />
      <select
        className={select ? 'comics-filter' : 'hide-comics-filter'}
        onChange={(e) => setFilter(e.target.value)}
        onMouseEnter={() => setselect(true)}
        onMouseLeave={() => setselect(false)}
      >
        <option value=""> {filter} </option>
        {response.map((element) => (
          <option key={element.id} value={element.name}>
            {element.name}
          </option>
        ))}
      </select>
      )
    </div>
  );
};

Filter.propTypes = {
  setFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  response: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Filter;
