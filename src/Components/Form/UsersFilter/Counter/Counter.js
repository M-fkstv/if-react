import React, { createRef, useReducer } from 'react';
import classNames from 'classnames';
import { counterReducer } from './Counter.Reducer';

import '../UsersFilter.css';

export const Counter = ({ name, guests, setGuests, select, setSelect, initialValue }) => {
  const [state, dispatch] = useReducer(counterReducer, { name: name, count: initialValue });

  const countRef = createRef();
  const { count } = state;

  const btnAdd = classNames({
    btn: true,
    'btn--disabled':
      (name.includes('adult') && count >= 30) ||
      (name.includes('rooms') && count >= 30) ||
      (name.includes('children') && count >= 10),
  });
  const btnRemove = classNames({
    btn: true,
    'btn--disabled':
      (name.includes('adult') && count === 1) ||
      (name.includes('rooms') && count === 1) ||
      (name.includes('children') && count === 0),
  });

  // Если пр пройдёт, код ниже удалить

  // const updateState = (e) => {
  //   console.log(e.target);

  //   setGuests({ ...guests, [e.target.name]: count +1});

  // if (id.includes('adults')) {
  //   setGuests({ ...guests, adults: state.count });
  // }
  // if (id.includes('children')) {
  //   setGuests({ ...guests, children: state.count });
  // }
  // if (id.includes('rooms')) {
  //   setGuests({ ...guests, rooms: state.count });
  // }
  // };

  const add = (e) => {
    const addReducer = () => {
      dispatch({ type: 'increment' });
    };
    addReducer();

    name === 'children' &&
      count < 10 &&
      setSelect((select) => {
        return [...select, count];
      });

    setGuests({ ...guests, [e.target.name]: count + 1 });
  };

  const remove = (e) => {
    (() => {
      dispatch({ type: 'decrement' });
    })();

    if (name === 'children' && count <= 10) {
      select.pop();
      setSelect((select) => {
        return [...select];
      });
    }
    setGuests({ ...guests, [e.target.name]: count - 1 });
  };

  return (
    <>
      <div className="counter">
        <button name={name} className={btnRemove} onClick={remove}>
          -
        </button>
        <span name={name} className="output" ref={countRef}>
          {count}
        </span>
        <button name={name} className={btnAdd} onClick={add}>
          +
        </button>
      </div>
    </>
  );
};
