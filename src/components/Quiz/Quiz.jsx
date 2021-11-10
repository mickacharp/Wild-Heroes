import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardsShuffle from './CardsShuffle';

const Quiz = () => {
  const [hero, setHero] = useState([]);
  // Call the api and load image to waiting call
  useEffect(() => {
    const fetchData = async () => {
      axios
        .get("https://superheroapi.com/api.php/10216027606921557/search/'%20'")
        .then((response) => response.data.results)
        .then((data) => {
          setHero(data);
        });
    };
    fetchData();
  }, []);
  return (
    <div>
      <CardsShuffle hero={hero} />
    </div>
  );
};
export default Quiz;
