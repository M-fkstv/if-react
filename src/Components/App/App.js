import React, { useState } from "react";

import { Main } from "../Main";
import { Sprite } from "../Sprite";

import { AvailableHotels } from "../AvailableHotels/AvailableHotels";
import { HomesClass } from "../HomesClass/HomesClass";

import "./App.css";

export const App = () => {
  const [state, setState] = useState([]);

  const setAppState = (value) => {
    setState(value);
  };

  return (
    <>
      <Sprite />
      <Main onSubmit={setAppState} />
      {state.length > 0 && <AvailableHotels data={state} />}
      <HomesClass />
    </>
  );
};
