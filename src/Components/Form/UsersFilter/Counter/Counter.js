import React, { createRef,  useReducer } from 'react';
import classNames from 'classnames';
import { conterReducer } from './Counter.Reducer';

import '../UsersFilter.css';

export const Counter = ({ id, updateChildren, updateAdults, updateRooms }) => {
  const [state, dispatch] = useReducer(conterReducer, { name: id, count: 0 });

  const countRef = createRef();

  const btnAdd = classNames({
    btn: true,
    'btn--disabled':
      (id.includes('adult') && state.count >= 10) ||
      (id.includes('rooms') && state.count >= 10) ||
      (id.includes('children') && state.count >= 10),
  });
  const btnRemove = classNames({
    btn: true,
    'btn--disabled':
      (id.includes('adult') && state.count === 1) ||
      (id.includes('rooms') && state.count === 1) ||
      (id.includes('children') && state.count === 0),
  });

  const updateState = () => {
    if(id.includes('adult')){
      updateAdults(state.count);
    }
    if(id.includes('children')){
      updateChildren(state.count);
    }
    if(id.includes('rooms')){
      updateRooms(state.count);
    }  
  };

  const add = () => {
    const addReducer = () => {
      dispatch({ type: 'decrement' });
    };

    addReducer();
    updateState();
  };

  const remove = (e) => {
    const removeReducer = () => {
      dispatch({ type: 'increment' });
    };

    removeReducer();
    updateState();
  };

  return (
    <>
      <div className="counter">
        <button id={id} className={btnRemove} onClick={add}>
          -
        </button>
        <span id={id} className="output" ref={countRef}>
          {state.count}
        </span>
        <button id={id} className={btnAdd} onClick={remove}>
          +
        </button>
      </div>
    </>
  );
};
