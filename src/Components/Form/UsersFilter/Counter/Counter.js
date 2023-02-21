import React, { createRef, useEffect, useReducer } from 'react';
import classNames from 'classnames';
import { conterReducer } from './Counter.Reducer';

import '../UsersFilter.css';

export const Counter = ({ id }) => {
  const [state, dispatch] = useReducer(conterReducer, { name: id, count: 1 });
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

  useEffect(() => {
    console.log(countRef);
  });

  return (
    <div className="counter">
      <button
        id={id}
        className={btnRemove}
        onClick={() => {
          dispatch({ type: 'decrement' });
        }}
      >
        -
      </button>
      <span id={id} className="output" ref={countRef}>
        {state.count}
      </span>
      <button
        id={id}
        className={btnAdd}
        onClick={() => {
          dispatch({ type: 'increment' });
        }}
      >
        +
      </button>
    </div>
  );
};
