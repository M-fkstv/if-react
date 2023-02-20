import React, { useState } from 'react';
import classNames from 'classnames';

import '../UsersFilter.css';

export const Counter = ({ id }) => {
  const [state, setState] = useState(1);

  const decrement = (e) => {
    if (e.target.id.includes('adult')) {
      return state <= 1 ? false : setState((state) => state - 1);
    }
    if (e.target.id.includes('children')) {
      return state <= 0 ? false : setState((state) => state - 1);
    }
    if (e.target.id.includes('rooms')) {
      return state <= 1 ? false : setState((state) => state - 1);
    }
  };

  const increment = (e) => {
    if (e.target.id.includes('adult')) {
      return state >= 30 ? false : setState((state) => state + 1);
    }
    if (e.target.id.includes('children')) {
      return state >= 10 ? false : setState((state) => state + 1);
    }
    if (e.target.id.includes('rooms')) {
      return state >= 30 ? false : setState((state) => state + 1);
    }
  };
  // if (id.includes('adult') && state > 1) {
  //   return (new Array(17).fill(0).map((item, index)=>`<option> ${index} years old <option/>`).join(''));
  // }

  const btnAdd = classNames({
    btn: true,
    'btn--disabled':
      (id.includes('adult') && state === 30) ||
      (id.includes('rooms') && state === 30) ||
      (id.includes('children') && state === 10),
  });
  const btnRemove = classNames({
    btn: true,
    'btn--disabled':
      (id.includes('adult') && state === 1) ||
      (id.includes('rooms') && state === 1) ||
      (id.includes('children') && state === 0),
  });

  return (
    <div className="counter">
      <button id={id} className={btnRemove} onClick={decrement}>
        -
      </button>
      <span id={id} className="output">
        {state}
      </span>
      <button id={id} className={btnAdd} onClick={increment}>
        +
      </button>
    </div>
  );
};
