import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import './card.css';
import Filter from './Filter';
import './filter.css';


const CardsList = ({
  hero,
  isLoading,
  searchName,
  setByPublisher,
  setGender,
  setRace,
  setAlignment,
  byPublisher,
  gender,
  race,
  alignment,
}) => {
  return (
    <div className="cards-list">
      {isLoading ? (
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/da734b28921021.55d95297d71f4.gif"
          alt="loader"
          className="loader-cardsList"
        />
      ) : (
        <div className="container-cards-button">
          <div className="container-filter">
            <Filter
              setFilter={setByPublisher}
              filter="by publisher"
              response={[
                'Marvel Comics',
                'DC Comics',
                'Image Comics',
                'Dark Horse',
                'NBC - Heroes',
                'Sharon Carter',
                'Wildstorm',
                'Archangel',
                'Tempest',
                'Image Comics',
                'Giant-Man',
                'Toxin',
                'Angel',
                'Speedy',
                'Goliath',
                'Spectre',
                'Oracle',
                'Hawkfire',
                'Huntress',
                'Misfit',
                'Spoiler',
                'Nightwing',
                'Icon Comics',
              ]}
            />
            <Filter
              setFilter={setGender}
              filter="by gender"
              response={['Male', 'Female']}
            />
            <Filter
              setFilter={setRace}
              filter="by race"
              response={[
                'Human',
                'Icthyo Sapien',
                'Ungaran',
                'Cosmic Entity',
                'Cyborg',
                'Xenomorph',
                'Android',
                'Vampire',
                'Mutant',
                'God',
                'Symbiote',
                'Atlantean',
                'Alien',
                'Neyaphen',
                'Alpha',
                'Bizarro',
                'Inhuman',
                'Metahuman',
                'Demon',
                'Dathomirian Zabrak',
                'Amazon',
                'Kryptonian',
                'Kakarantharaian',
                'Black Racer',
              ]}
            />
            <Filter
              setFilter={setAlignment}
              filter="by alignment"
              response={['good', 'bad', 'neutral']}
            />
          </div>
          <div className="container-cards">
            {hero.map((el) => (
              <Card
                key={el.id}
                name={el.name}
                image={el.image.url}
                alignment={el.biography.alignment}
                stats={el.powerstats}
                publisher={el.biography.publisher}
                gender={el.appearance.gender}
                race={el.appearance.race}
                weight={el.appearance.weight[1]}
                height={el.appearance.height[1]}
                fullName={el.biography['full-name']}
                placeOfBirth={el.biography['place-of-birth']}
                firstAppearance={el.biography['first-appearance']}
                groupAffiliation={el.connections['group-affiliation']}
              />
            ))}
            {hero
              .filter((el) => el.name.includes(searchName))
              .filter((el) => el.biography.publisher.includes(byPublisher))
              .filter((el) => el.appearance.gender.includes(gender))
              .filter((el) => el.appearance.race.includes(race))
              .filter((el) => el.biography.alignment.includes(alignment))
              .filter((el) =>
                el.name.toLowerCase().includes(searchName.toLowerCase())
              )
              .map((el) => (
                <Card
                  key={el.id}
                  name={el.name}
                  image={el.image.url}
                  alignment={el.biography.alignment}
                />
              ))}
          </div>
        </div>
      )}
    </div>
  );
};
CardsList.propTypes = {
  hero: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool.isRequired,
  searchName: PropTypes.string.isRequired,

  setByPublisher: PropTypes.string.isRequired,
  setGender: PropTypes.string.isRequired,
  setRace: PropTypes.string.isRequired,
  setAlignment: PropTypes.string.isRequired,
  byPublisher: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  race: PropTypes.string.isRequired,
  alignment: PropTypes.string.isRequired,

};
export default CardsList;
