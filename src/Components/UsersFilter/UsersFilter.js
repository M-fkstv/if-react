import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';

import { Counter } from '../Counter/Counter';
import { SelectWrapper } from './Select';

import './UsersFilter.css';
import { useUsersFilterStyles } from './UsersFilter.styles';

export const UsersFilter = memo(({ active }) => {
  const classes = useUsersFilterStyles();
  const [select, setSelect] = useState([]);
  const [guests, setGuests] = useState({
    adults: 1,
    children: 0,
    rooms: 1,
  });

  return (
    <div className={active ? 'persons active' : 'persons'}>
      {/* <div className={active ? `${classes.persons}` : `${classes.personsActive}`}>  */}
      {/*  Ломает useClickOutside */}
      <div className={classes.inputs}>
        <div className={classes.adultsInput}>
          <p>Adults</p>
          <Counter name={'adults'} setGuests={setGuests} guests={guests} initialValue={1} />
        </div>
        <div className={classes.childrenInput}>
          <p>Children</p>
          <Counter
            name={'children'}
            setGuests={setGuests}
            guests={guests}
            select={select}
            setSelect={setSelect}
            initialValue={0}
          />
        </div>

        <div className={classes.roomsInput}>
          <p>Rooms</p>
          <Counter name={'rooms'} setGuests={setGuests} guests={guests} initialValue={1} />
        </div>
        {guests.children > 0 && (
          <p className="children__input--subtitle">
            What is the age of the child you're travelling with
          </p>
        )}
        <SelectWrapper select={select} />
      </div>
    </div>
  );
});

UsersFilter.propTypes = {
  active: PropTypes.bool,
};
