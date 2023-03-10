import React, { useState, forwardRef } from 'react';
import { Counter } from './Counter/Counter';
import { SelectWrapper } from './Select';

import './UsersFilter.css';

export const UsersFilter = forwardRef(({ active }, AdRef) => {

  const [select, setSelect] = useState([]);
  const [guests, setGuests] = useState({
    adults: 1,
    children: 0,
    rooms: 1,
  });

  console.log(AdRef.current);

  return (
    <div className={active ? 'persons active' : 'persons'}>
      <div className="persons__inputs" >
        <div className="adults__input">
          <p className="inputs__title--adult">Adults</p>
          <Counter name={'adults'} setGuests={setGuests} guests={guests} initialValue={1} />
        </div>
        <div className="children__input">
          <p className="inputs__title">Children</p>
          <Counter
            name={'children'}
            setGuests={setGuests}
            guests={guests}
            select={select}
            setSelect={setSelect}
            initialValue={0}
          />
        </div>

        <div className="rooms__input">
          <p className="inputs__title">Rooms</p>
          <Counter name={'rooms'} setGuests={setGuests} guests={guests} initialValue={1} />
        </div>
        { guests.children !== 0 && (
          <p className="children__input--subtitle">
            What is the age of the child you're travelling with
          </p>
        )}
        <SelectWrapper select={select} />
      </div>
    </div>
  );
});
