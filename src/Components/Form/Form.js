import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '../Button';
import { Calendar } from '../Calendar';
import { HotelsSearch } from '../HotelsSearch';
import { UsersFilter } from '../UsersFilter';

import { useClickOutside } from '../../hooks/useClickOutSide';
import { apiUrl } from '../../services/Constanst/links';
import { getHotels } from '../../services/SearchApi/SearchAPI';

import { useAvailableHotMutation } from '../../services/getAvailable';
import { availableHotelsActions, setAvailableHotels } from '../../store/slices/available.slice';

import './Form.styles.js';
import { useButtonStyles } from '../Button/Button.styles';
import { useFormStyles } from './Form.styles.js';

export const Form = () => {
  const classes = useFormStyles();
  const btnClasses = useButtonStyles();

  const [formState, setFormState] = useState('');
  const [filterActive, setFilterActive] = useState(false);
  const adultsCountRef = useRef();
  const dispatch = useDispatch();
  // const { data: hotels1 = [], isLoading } = useGetAvailableHotelsQuery();
  const [getAvailableHotels, { isLoading }] = useAvailableHotMutation();
  const state = useSelector((state) => state);

  async function handleSubmit(e) {
    e.preventDefault();
    if (formState !== '') {
      // apiUrl.searchParams.set('search', `${formState}`);

      // const hotels = wrapPromise(getData(apiUrl));
      // const hotels = getHotels(apiUrl);

      try {
        // const availableHotels = await hotels;
        // const {data: availableHotels} = await getAvailableHotels(formState);
        await getAvailableHotels(formState);
        console.log((await getAvailableHotels(formState)).data);
        console.log(state);
        // dispatch(availableHotelsActions.setAvailableHotels(availableHotels));
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
    <form id="form" className={classes.form} onSubmit={handleSubmit} ref={outsideRef}>
      <HotelsSearch onChange={handleChange} value={formState} />
      <div className={classes.dates}>
        <label className={classes.dateInLlabel} htmlFor="date-in">
          Check in
        </label>
        <Calendar />
        <label className={classes.dateOutLabel} htmlFor="date-out">
          Check out
        </label>
      </div>
      <div className={classes.persons} onClick={showFilter}>
        <h3>
          <span ref={adultsCountRef}>1</span> Adults - <span>0</span> Children - <span>1</span>Rooms
        </h3>
      </div>

      <UsersFilter active={filterActive} ref={adultsCountRef} />
      {/* ref={adultsCountRef} показывает ошибку
      Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()
      */}

      <Button btnText={'Submit'} className={btnClasses.submit} />  {/* form__submit col-md-4 col-xs-6 */}
     
    </form>
  );
};
