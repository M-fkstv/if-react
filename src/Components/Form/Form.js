import React, { useState, useContext, useRef} from 'react';
import axios from 'axios';
import { SearchButton } from './SearchButton';
import { HotelsSearch } from './HotelsSearch';
import { apiUrl } from '../../Services/Constanst/links';
import { AvailableHotelsContext } from '../../Context/AvailableHotelsContext';
import { Calendar } from '../Calendar';
import { UsersFilter } from './UsersFilter';
import { useClickOutside } from '../../Hooks/useClickOutSide';

import './Form.css';

export const Form = () => {
  const [formState, setFormState] = useState('');
  const [filterActive, setFilterActive] = useState(false);
  const { setAvailable } = useContext(AvailableHotelsContext);
  const AdRef = useRef();

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

  const showFilter = () => {
    filterActive ? setFilterActive(false) : setFilterActive(true);
  };

  const outsideRef = useClickOutside(() => setFilterActive(false));
  

  // ref.current.textContent = 3;
  

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
          <span ref={AdRef}>1</span> Adults - <span>0</span> Children - <span>1</span> Rooms
        </h3>
      </div>

      <UsersFilter active={filterActive} ref={AdRef}/>
      <SearchButton />
    </form>
  );
};
