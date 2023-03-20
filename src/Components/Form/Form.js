import React, { useState, useContext, useRef } from 'react';

import { Button } from '../Button';
import { HotelsSearch } from '../HotelsSearch';
import { Calendar } from '../Calendar';
import { UsersFilter } from '../UsersFilter';
import { AvailableHotelsContext } from '../../Context/AvailableHotelsContext';

import { useClickOutside } from '../../hooks/useClickOutSide';
import { getData } from '../../hooks/getData';
import { wrapPromise } from '../../lib/wrapPromise';
import { apiUrl } from '../../services/Constanst/links';

import './Form.css';

export const Form = () => {
  const [formState, setFormState] = useState('');
  const [filterActive, setFilterActive] = useState(false);
  const { setAvailable } = useContext(AvailableHotelsContext);
  const adultsCountRef = useRef();

  async function handleSubmit(e) {
    e.preventDefault();

    if (formState !== '') {
      apiUrl.searchParams.set('search', `${formState}`);

      const hotels = wrapPromise(getData(apiUrl));

      try {
        const availableHotels = await hotels;
        setAvailable(availableHotels);
      } catch (error) {
        console.error();
      }

      setFormState('');
    }
  }
  function handleChange(e) {
    setFormState(e.target.value);
  }

  const showFilter = () => {
    filterActive ? setFilterActive(false) : setFilterActive(true);
  };

  const outsideRef = useClickOutside(() => setFilterActive(false));

  return (
    <form id="form" className="form col-md-12" onSubmit={handleSubmit} ref={outsideRef}>
      <HotelsSearch onChange={handleChange} value={formState} />
      <div className="form__date col-md-4">
        <label className="form__date--in--label label" htmlFor="date-in">
          Check in
        </label>
        <Calendar />
        <label className="form__date-out--label label" htmlFor="date-out">
          Check out
        </label>
      </div>
      <div className="form__person col-md-4 col-xs-6" onClick={showFilter}>
        <h3>
          <span ref={adultsCountRef}>1</span> Adults - <span>0</span> Children - <span>1</span>{' '}
          Rooms
        </h3>
      </div>

      <UsersFilter active={filterActive} ref={adultsCountRef} />
      <Button btnText={'Submit'} className="form__submit col-md-4 col-xs-6" />
    </form>
  );
};
