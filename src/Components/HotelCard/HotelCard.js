import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { PATH } from '../../Constants/paths';

import './HotelCard.css';

export const HotelCard = ({ id, name, city, country, imageUrl }) => {
  return (
    <div className="homes__examples__icons ">
      <Link to={`${PATH.hotels}${id}`} state={{ id, name, city, country, imageUrl }}>
        <img className="homes__examples__icon " id={id} src={imageUrl} alt={name} />

        <div className="homes__description">
          <p className="homes__description--text">{name}</p>
          <p className="homes__description--text">
            {city}, {country}
          </p>
        </div>
      </Link>
    </div>
  );
};

HotelCard.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  city: PropTypes.string,
  country: PropTypes.string,
  imageUrl: PropTypes.string,
};
