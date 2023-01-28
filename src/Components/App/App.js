import React from "react";

import { Section } from "../Section";
import { Main } from "../Main";
import { Sprite } from "../Sprite";
import { hotels } from "../HotelCard/config";

import "./App.css";

export const App = () => {
  return (
    <>
      <Sprite />
      <Main />
      <Section sectionName={"Homes guests loves"} data={hotels} />
    </>
  );
};
