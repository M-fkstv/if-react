import React, { useState } from "react";

import { Section } from "../Section";
import { Main } from "../Main";
import { Sprite } from "../Sprite";
import { hotels } from "../HotelCard/config";

import "./App.css";

export const App = () => {
  const [state, setState] = useState("");

  const setAppState = (value) => {
    setState(value);
  };

  return (
    <>
      <Sprite />
      <Main onSubmit={setAppState} />
      {state.length > 0 ? (
        <Section sectionName={"Available hotels"} data={state} />
      ) : (
        false
      )}
      <Section sectionName={"Homes guests loves"} data={hotels} />
    </>
  );
};
