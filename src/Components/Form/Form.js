import React, { useState, useContext } from 'react';
import axios from 'axios';
import { SearchButton } from './SearchButton';
import { HotelsSearch } from './HotelsSearch';
import { apiUrl } from '../../Services/Constanst/links';
import { AvailableHotelsContext } from '../../Context/AvailableHotelsContext';
import { Calendar } from '../Calendar';
import { UsersFilter } from './UsersFilter';

import './Form.css';

export const Form = () => {
  const [formState, setFormState] = useState('');
  const [filterActive, setFilterActive] = useState(false);
  const { setAvailable } = useContext(AvailableHotelsContext);

  function handleSubmit(e) {
    e.preventDefault();

    formState !== '' &&
      axios
        .get(`${apiUrl}`, {
          params: {
            search: `${formState}`,
          },
        })
        //TODO: Error handling, loader
        .then(formState === '' ? false : (resp) => setAvailable(resp.data))
        .catch(function (error) {
          console.log(error);
        });
  }

  function handleChange(e) {
    setFormState(e.target.value);
  }

  const showFilter = (e) => {
    console.log(e.target, e.currentTarget);
    filterActive ? setFilterActive(false) : setFilterActive(true);
  };

  return (
    <form id="form" className="form col-md-12" onSubmit={handleSubmit}>
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
        {/* <input type='text' ref={myRef} value={`${formState} Adults 0 Children 1 Rooms`}/> */}
        <h3>
          <span>2</span> Adults - <span>0</span> Children - <span>1</span> Rooms
        </h3>
      </div>

      <UsersFilter active={filterActive} />
      <SearchButton />
    </form>
  );
};
