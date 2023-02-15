import React, { useState } from 'react';
import { Counter } from './Counter/Counter';

import './UsersFilter.css';

export const UsersFilter = () => {
  return (
    <div className="persons">
      <div className="persons__inputs">
        <div className="adults__input">
          <p className="inputs__title--adult">Adults</p>
          <Counter />
        </div>
        <div className="children__input">
          <p className="inputs__title">Children</p>
          <Counter />
          {/* 
          <div className="adults__inputs--counter">
            <button id="children-remove" className="inputs__button remove--button">
              -
            </button>
            <span id="children-output" className="inputs__button--output">
              0
            </span>
            <button id="children-add" className="inputs__button add--button">
              +
            </button>
          </div> */}
        </div>

        <div className="rooms__input">
          <p className="inputs__title">Rooms</p>
          <Counter />

          {/* <div className="adults__inputs--counter">
            <button id="room-remove" className="inputs__button remove--button">
              -
            </button>
            <span id="room-out" className="inputs__button--output">
              0
            </span>
            <button id="room-add" className="inputs__button add--button">
              +
            </button>
          </div> */}
        </div>
        <p hidden className="children__input--subtitle">
          What is the age of the child you're travelling with
        </p>
      </div>
    </div>
  );
};
