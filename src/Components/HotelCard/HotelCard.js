import React from "react";

import "./HotelCard.css";

export const HotelCard = ({ id, name, city, country, imageUrl }) => (
  <div className="homes__examples__icons col-lg-3 col-md-3 col-xs-3">
    <img className="homes__examples__icon " id={id} src={imageUrl} alt={name} />
    <div className="homes__description">
      <p className="homes__description--text">{name}</p>
      <p className="homes__description--text">
        {city}, {country}
      </p>
    </div>
  </div>
);
