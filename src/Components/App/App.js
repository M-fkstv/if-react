import "./App.css";

import { Section } from "../Section";
import { hotels } from "../HotelCard/config";
import { Main } from "../Main";
import { Sprite } from "../Sprite";

export const App = () => {
  return (
    <>
      <Sprite />
      <Main />
      <Section sectionName={"Homes guests loves"} data={hotels} />
    </>
  );
};
