import React, { createRef, useEffect, useState } from 'react';
import { Counter } from './Counter/Counter';
import { SelectWrapper } from './Select';

import './UsersFilter.css';

export const UsersFilter = ({ active }) => {
  const personsRef = createRef();
  const [activeSelect, setActiveSelect] = useState(false);
  const [guests, setGuests] = useState({
    adults: 0,
    children: 0,
    rooms: 0,
  });

 useEffect(()=>{
  guests.children > 1 ? setActiveSelect(true) : setActiveSelect(false);
 }, [guests.children]) ;
  

  const updateChildren = (count) =>{
    setGuests({...guests, 
      children: count,
    });
  };

  const updateAdults = (count) =>
    setGuests({...guests, 
      adults: count,
    });

  const updateRooms = (count) =>
    setGuests({...guests, 
      rooms: count,
    });

  return (
    <div className={active ? 'persons active' : 'persons'}>
      <div className="persons__inputs" ref={personsRef}>
        <div className="adults__input">
          <p className="inputs__title--adult">Adults</p>
          <Counter id={'adults'} updateAdults={updateAdults} />
        </div>
        <div className="children__input" >
          <p className="inputs__title">Children</p>
          <Counter id={'children'} updateChildren={updateChildren} />
        </div>

        <div className="rooms__input">
          <p className="inputs__title">Rooms</p>
          <Counter id={'rooms'} updateRooms={updateRooms}/>
        </div>
        <p className="children__input--subtitle">
          What is the age of the child you're travelling with
        </p>
        <SelectWrapper activeSelect={activeSelect} />
      </div>
    </div>
  );
};
