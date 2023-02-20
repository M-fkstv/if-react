import React from 'react';
import { Counter } from './Counter/Counter';

import './UsersFilter.css';

export const UsersFilter = ({ active }) => {
  return (
    <div className={active ? 'persons active' : 'persons'}>
      <div className="persons__inputs">
        <div className="adults__input">
          <p className="inputs__title--adult">Adults</p>
          <Counter id={'adults'} />
        </div>
        <div className="children__input">
          <p className="inputs__title">Children</p>
          <Counter id={'children'} />
        </div>

        <div className="rooms__input">
          <p className="inputs__title">Rooms</p>
          <Counter id={'rooms'} />
        </div>
        <p hidden className="children__input--subtitle">
          What is the age of the child you're travelling with
        </p>
      </div>
    </div>
  );
};
