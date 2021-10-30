import axios from 'axios';
import React, { useState, useEffect } from 'react';
import CardsList from './CardsList';
import Pagination from './Pagination';
import './cards.css';

const Informations = () => {
  const [hero, setHero] = useState([]);
  const [playOnce, setPlayOnce] = useState(true);
  const [rangeValue, setRangeValue] = useState(20);
  const [isLoading, setIsLoading] = useState(true);
  const handleClick = (value) => {
    setRangeValue(value + 20);
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

  // UseState for range page
  const [currentPage, setCurrentPage] = useState(1);
  // Number of Cards by page
  const [cardsPerPage, setCardsPerPage] = useState(30);
  // Get current posts
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentHero = hero.slice(indexOfFirstCard, indexOfLastCard);

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <CardsList
        setCardsPerPage={setCardsPerPage}
        totalCards={hero.length}
        rangeValue={rangeValue}
        handleClick={handleClick}
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
