import React, { createRef, useEffect, useReducer } from 'react';
import classNames from 'classnames';

import '../UsersFilter.css';

function reducer(state, action) {
  if (action.type === 'decrement') {
    if (state.name === 'children' && state.count > 0) {
      return {
        name: state.name,
        count: state.count - 1,
      };
    }
    if (state.name === 'adults' && state.count > 1) {
      return {
        name: state.name,
        count: state.count - 1,
      };
    }
    if (state.name === 'rooms' && state.count > 1) {
      return {
        name: state.name,
        count: state.count - 1,
      };
    }
    return {
      name: state.name,
      count: state.count,
    };
  }
  if (action.type === 'increment') {
    if (state.name === 'children' && state.count < 10) {
      return {
        name: state.name,
        count: state.count + 1,
      };
    }
    if (state.name === 'adults' && state.count < 10) {
      return {
        name: state.name,
        count: state.count + 1,
      };
    }
    if (state.name === 'rooms' && state.count < 10) {
      return {
        name: state.name,
        count: state.count + 1,
      };
    }
    return {
      name: state.name,
      count: state.count,
    };
  }
  throw Error('Unknown action.');
}

export const Counter = ({ id }) => {
  const [state, dispatch] = useReducer(reducer, { name: id, count: 1 });
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
    console.log(countRef.current.textContent);
  }, [countRef]);

  return (
    <div className="counter">
      <button
        id={ id }
        className={ btnRemove }
        onClick={() => {
          dispatch({ type: 'decrement' });
        }}>
        -
      </button>
      <span id={ id } className="output" ref={ countRef }>
        { state.count }
      </span>
      <button
        id={ id }
        className={ btnAdd } 
        onClick={() => {
          dispatch({ type: 'increment' });
        }}>
        +
      </button>
    </div>
  );
};
