import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/NavBar';
import CardsList from './CardsList';
import Pagination from './Pagination';
import SearchbarName from './SearchBarName';

const Informations = () => {
  /* Array of data */
  const [hero, setHero] = useState([]);
  // Data Array filter
  const heroGoodDisplay = [];
  hero.map(
    (el) =>
      el.powerstats.combat !== 'null' &&
      el.powerstats.durability !== 'null' &&
      el.powerstats.intelligence !== 'null' &&
      el.powerstats.power !== 'null' &&
      el.powerstats.speed !== 'null' &&
      el.powerstats.strength !== 'null' &&
      heroGoodDisplay.push(el)
  );
  const [isLoading, setIsLoading] = useState(true);
  // UseState for range page
  const [currentPage, setCurrentPage] = useState(1);
  // Number of Cards by page
  const [cardsPerPage, setCardsPerPage] = useState(20);
  // Filters
  const [byPublisher, setByPublisher] = useState('');
  const [gender, setGender] = useState('');
  const [alignment, setAlignment] = useState('');
  const [race, setRace] = useState('');
  // SearchBar
  const [searchName, setSearchName] = useState('');
  const handleChange = (e) => {
    setSearchName(e.target.value);
  };
  // filter array table for adaptative pagination
  const heroFilter = heroGoodDisplay
    .filter((el) => el.biography.publisher.includes(byPublisher))
    .filter((el) => el.appearance.gender.includes(gender))
    .filter((el) => el.appearance.race.includes(race))
    .filter((el) => el.biography.alignment.includes(alignment))
    .filter((el) => el.name.toLowerCase().includes(searchName.toLowerCase()));
  // Get current page
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentHero = heroFilter.slice(indexOfFirstCard, indexOfLastCard);

  const allRaces = [
    { id: 0, name: 'Alien' },
    { id: 1, name: 'Alpha' },
    { id: 2, name: 'Amazon' },
    { id: 3, name: 'Android' },
    { id: 4, name: 'Atlantean' },
    { id: 5, name: 'Bizarro' },
    { id: 6, name: 'Black Racer' },
    { id: 7, name: 'Cosmic Entity' },
    { id: 8, name: 'Cyborg' },
    { id: 9, name: 'Dathomirian Zabrak' },
    { id: 10, name: 'Demon' },
    { id: 11, name: 'God' },
    { id: 12, name: 'Human' },
    { id: 13, name: 'Icthyo Sapien' },
    { id: 14, name: 'Inhuman' },
    { id: 15, name: 'Kakarantharaian' },
    { id: 16, name: 'Kryptonian' },
    { id: 17, name: 'Metahuman' },
    { id: 18, name: 'Mutant' },
    { id: 19, name: 'Symbiote' },
    { id: 20, name: 'Ungaran' },
    { id: 21, name: 'Vampire' },
    { id: 22, name: 'Xenomorph' },
  ];

  const allPublishers = [
    { id: 23, name: 'Marvel Comics' },
    { id: 24, name: 'DC Comics' },
    { id: 25, name: 'Image Comics' },
    { id: 26, name: 'Dark Horse' },
    { id: 27, name: 'NBC - Heroes' },
    { id: 28, name: 'Wildstorm' },
    { id: 29, name: 'Archangel' },
    { id: 30, name: 'Tempest' },
    { id: 31, name: 'Image Comics' },
    { id: 32, name: 'Giant-Man' },
    { id: 33, name: 'Toxin' },
    { id: 34, name: 'Angel' },
    { id: 35, name: 'Goliath' },
    { id: 36, name: 'Oracle' },
    { id: 37, name: 'Spoiler' },
    { id: 38, name: 'Nightwing' },
    { id: 39, name: 'Icon Comics' },
  ];

  const allGenders = [
    { id: 40, name: 'Male' },
    { id: 41, name: 'Female' },
  ];

  const allAlignments = [
    { id: 42, name: 'good' },
    { id: 43, name: 'bad' },
    { id: 44, name: 'neutral' },
  ];

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    document.documentElement.scrollTop = 0;
  };

  // Call the api and load image to waiting call
  useEffect(() => {
    const fetchData = async () => {
      axios
        .get("https://superheroapi.com/api.php/10216027606921557/search/'%20'")
        .then((response) => response.data.results)
        .catch((error) => error.status(404))
        .then((data) => {
          setHero(data);
          setIsLoading(false);
        });
    };
    fetchData();
  }, []);

  // change the component according to search state
  useEffect(() => {
    if (
      searchName !== '' ||
      byPublisher !== '' ||
      gender !== '' ||
      race !== '' ||
      alignment !== ''
    ) {
      setCurrentPage(1);
    }
  }, [searchName, byPublisher, gender, race, alignment]);

  return (
    <div>
      <Navbar />
      <div>
        <SearchbarName
          searchName={searchName}
          setSearchName={setSearchName}
          handleChange={handleChange}
        />
      </div>

      <CardsList
        isLoading={isLoading}
        searchName={searchName}
        heroFilter={heroFilter}
        hero={currentHero}
        byPublisher={byPublisher}
        setByPublisher={setByPublisher}
        gender={gender}
        setGender={setGender}
        alignment={alignment}
        setAlignment={setAlignment}
        race={race}
        setRace={setRace}
        allRaces={allRaces}
        allPublishers={allPublishers}
        allGenders={allGenders}
        allAlignments={allAlignments}
      />
      <div className="container-pagination">
        <Pagination
          currentPage={currentPage}
          setCardsPerPage={setCardsPerPage}
          cardsPerPage={cardsPerPage}
          totalCards={heroFilter.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default Informations;
