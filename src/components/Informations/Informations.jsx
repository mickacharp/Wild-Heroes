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
  }, [hero, playOnce, rangeValue]);

  // UseState for range page
  const [currentPage, setCurrentPage] = useState(1);
  // Number of élements by page
  const [postsPerPage] = useState(20);
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentHero = hero.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <CardsList
        id
        rangeValue={rangeValue}
        handleClick={handleClick}
        isLoading={isLoading}
        hero={currentHero}
      />
      <div className="container mt-5">
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={hero.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default Informations;
