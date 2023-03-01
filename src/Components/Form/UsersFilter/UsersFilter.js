import React, { createRef, useState } from 'react';
import { Counter } from './Counter/Counter';
import { SelectWrapper } from './Select';

import './UsersFilter.css';

export const UsersFilter = ({ active }) => {
  const personsRef = createRef();
  const [select, setSelect] = useState([]);
  const [guests, setGuests] = useState({
    adults: 0,
    children: 0,
    rooms: 0,
  });

  return (
    <div className={active ? 'persons active' : 'persons'}>
      <div className="persons__inputs" ref={personsRef}>
        <div className="adults__input">
          <p className="inputs__title--adult">Adults</p>
          <Counter name={'adults'} setGuests={setGuests} guests={guests} />
        </div>
        <div className="children__input">
          <p className="inputs__title">Children</p>
          <Counter
            name={'children'}
            setGuests={setGuests}
            guests={guests}
            select={select}
            setSelect={setSelect}
          />
        </div>

        <div className="rooms__input">
          <p className="inputs__title">Rooms</p>
          <Counter name={'rooms'} setGuests={setGuests} guests={guests} />
        </div>
        {guests.children !== 0 && (
          <p className="children__input--subtitle">
            What is the age of the child you're travelling with
          </p>
        )}
        <SelectWrapper select={select} />
      </div>
    </div>
  );
};
