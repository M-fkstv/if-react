import React from 'react';

import './Night.css';

export const Night = ({ onClick }) => {
  return (
    <svg onClick={onClick} className="header__images--night">
      <use href="#night" />
    </svg>
  );
};
