import React, { createRef, useReducer } from 'react';
import classNames from 'classnames';
import { counterReducer } from './Counter.Reducer';

import '../UsersFilter.css';

export const Counter = ({ id, guests, setGuests, select, setSelect}) => {
  const [state, dispatch] = useReducer(counterReducer, { name: id, count: 0 });

  const countRef = createRef();

  const btnAdd = classNames({
    btn: true,
    'btn--disabled':
      (id.includes('adult') && state.count >= 30) ||
      (id.includes('rooms') && state.count >= 30) ||
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
    if (id.includes('adults')) {
      setGuests({...guests, adults:state.count });
    }
    if (id.includes('children')) {
      setGuests({...guests, children:state.count });
      
    }
    if (id.includes('rooms')) {
      setGuests({...guests, rooms:state.count });
    }
  };

  const add = () => {
    const addReducer = () => {
      dispatch({ type: 'increment' });
    };
    addReducer();
    state.count < 10 && setSelect([...select, state.count]);
    updateState();
  };

  const remove = (e) => {
    (() => {
      dispatch({ type: 'decrement' });
    })();
    updateState();
  };

  return (
    <>
      <div className="counter">
        <button id={id} className={btnRemove} onClick={remove}>
          -
        </button>
        <span id={id} className="output" ref={countRef}>
          {state.count}
        </span>
        <button id={id} className={btnAdd} onClick={add}>
          +
        </button>
      </div>
    </>
  );
};
