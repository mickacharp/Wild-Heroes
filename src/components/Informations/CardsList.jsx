import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import './cards.css';

const CardsList = ({ hero, isLoading }) => {
  /* A débloqué quand on ajoutera les filtres
  if (search !== '') {
    setCardsPerPage(totalCards);
  } else {
    setCardsPerPage(30);
  } */
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
          <div className="container-cards">
            {hero.map((el) => (
              <Card
                key={el.id}
                name={el.name}
                image={el.image.url}
                alignment={el.biography.alignment}
                stats={el.powerstats}
                // fullName={el.biography.full - name}
                // placeOfBirth={el.biography.place - of - birth}
                // firstAppearance={el.biography.first - appearance}
                publisher={el.biography.publisher}
                gender={el.appearance.gender}
                race={el.appearance.race}
                weight={el.appearance.weight[1]}
                height={el.appearance.height[1]}
                // groupAffiliation={el.connections.group - affiliation}
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
  // setCardsPerPage: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default CardsList;
