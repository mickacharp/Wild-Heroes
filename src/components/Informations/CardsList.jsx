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
  allRaces,
  allPublishers,
  allGenders,
  allAlignments,
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
              setFilter={setGender}
              filter="Gender"
              response={allGenders}
            />
            <Filter
              setFilter={setAlignment}
              filter="Alignment"
              response={allAlignments}
            />
            <Filter
              setFilter={setByPublisher}
              filter="Publisher"
              response={allPublishers}
            />
            <Filter setFilter={setRace} filter="Race" response={allRaces} />
          </div>
          <div className="container-cards">
            {hero
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
          </div>
        </div>
      )}
    </div>
  );
};
CardsList.propTypes = {
  hero: PropTypes.arrayOf(PropTypes.object).isRequired,
  allRaces: PropTypes.arrayOf(PropTypes.object).isRequired,
  allPublishers: PropTypes.arrayOf(PropTypes.object).isRequired,
  allGenders: PropTypes.arrayOf(PropTypes.object).isRequired,
  allAlignments: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool.isRequired,
  searchName: PropTypes.string.isRequired,
  setByPublisher: PropTypes.func.isRequired,
  setGender: PropTypes.func.isRequired,
  setRace: PropTypes.func.isRequired,
  setAlignment: PropTypes.func.isRequired,
  byPublisher: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  race: PropTypes.string.isRequired,
  alignment: PropTypes.string.isRequired,
};
export default CardsList;
