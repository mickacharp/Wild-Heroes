import axios from 'axios';
import React, { useState, useEffect } from 'react';
import CardsList from './CardsList';
import Pagination from './Pagination';
import SearchbarName from './SearchBarName';
import './card.css';

const Informations = () => {
  const [hero, setHero] = useState([]);
  const [playOnce, setPlayOnce] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  // UseState for range page
  const [currentPage, setCurrentPage] = useState(1);
  // Number of Cards by page
  const [cardsPerPage, setCardsPerPage] = useState(30);
  // Get current page
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentHero = hero.slice(indexOfFirstCard, indexOfLastCard);
  // SearchBar
  const [searchName, setSearchName] = useState('');
  const handleChange = (e) => {
    setSearchName(e.target.value);
  };

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    document.documentElement.scrollTop = 0;
  };

  useEffect(() => {
    if (playOnce) {
      axios
        .get("https://superheroapi.com/api.php/10216027606921557/search/'%20'")
        .then((response) => response.data.results)
        .then((data) => {
          setHero(data);
          setPlayOnce(false);
          setIsLoading(false);
        });
    }
  }, [hero, playOnce]);

  return (
    <div>
      <div>
        <SearchbarName
          searchName={searchName}
          setSearchName={setSearchName}
          handleChange={handleChange}
        />
      </div>
      <CardsList
        searchName={searchName}
        setSearchName={setSearchName}
        setCardsPerPage={setCardsPerPage}
        totalCards={hero.length}
        isLoading={isLoading}
        hero={currentHero}
      />

      <div className="container-pagination">
        <Pagination
          currentPage={currentPage}
          cardsPerPage={cardsPerPage}
          totalCards={hero.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default Informations;
