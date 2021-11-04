import axios from 'axios';
import React, { useState, useEffect } from 'react';
import CardsList from './CardsList';
import Pagination from './Pagination';
import SearchbarName from './SearchBarName';
import './card.css';

const Informations = () => {
  const [hero, setHero] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  // UseState for range page
  const [currentPage, setCurrentPage] = useState(1);
  // Number of Cards by page
  const [cardsPerPage, setCardsPerPage] = useState(30);
  // Filters
  const [byPublisher, setByPublisher] = useState('');
  const [gender, setGender] = useState('');
  const [alignment, setAlignment] = useState('');
  const [race, setRace] = useState('');
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

  // Call the api and load image to waiting call
  useEffect(() => {
    if (isLoading) {
      axios
        .get("https://superheroapi.com/api.php/10216027606921557/search/'%20'")
        .then((response) => response.data.results)
        .then((data) => {
          setHero(data);
          setIsLoading(false);
        });
    }
  }, [hero]);
  // change the component according to searchname state
  useEffect(() => {
    if (searchName !== '') {
      setCurrentPage(1);
      setCardsPerPage(hero.length);
    } else {
      setCardsPerPage(30);
    }
  }, [searchName]);

  useEffect(() => {
    if (byPublisher !== '') {
      setCurrentPage(1);
      setCardsPerPage(hero.length);
    }
  }, [byPublisher]);

  useEffect(() => {
    if (gender !== '') {
      setCurrentPage(1);
      setCardsPerPage(hero.length);
    }
  }, [gender]);

  useEffect(() => {
    if (alignment !== '') {
      setCurrentPage(1);
      setCardsPerPage(hero.length);
    }
  }, [alignment]);

  useEffect(() => {
    if (race !== '') {
      setCurrentPage(1);
      setCardsPerPage(hero.length);
    }
  }, [race]);

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
        isLoading={isLoading}
        hero={currentHero}
        byPublisher={byPublisher}
        setByPublisher={setByPublisher}
        gender={gender}
        setGender={setGender}
        alignment={alignment}
        setAlignment={setAlignment}
        race={race}
        setRace={setRace}
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
