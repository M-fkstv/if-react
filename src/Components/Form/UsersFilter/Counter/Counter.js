import React, { useState } from 'react';

import '../UsersFilter.css';    


export const Counter = () => {
  const [state, setState] = useState(2);

  const decrement = () => {
    setState(state - 1);
  };

  const increment = () => {
    setState((state) => state + 1);
  };



  return (
    <div className="adults__inputs--counter">
      <button id="adult-remove" className="inputs__button remove--button" onClick={decrement}>
        -
      </button>
      <span id="adults-output" className="inputs__button--output">
        {state}
      </span>
      <button id="adult-add" className="inputs__button add--button" onClick={increment}>
        +
      </button>
    </div>
  );
};
