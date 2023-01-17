import React from "react";
import { HotelCard } from "../HotelCard";
import { hotels } from "../HotelCard/config";

import "./Section.css";
import { SliderButton } from "../SliderButton";

export const Section = ({ sectionName }) => (
  <section className="homes">
    <h2 className="h2-text">{sectionName}</h2>

    <div className="homes__examples">
      <SliderButton className={"s-button-next"} />
      {hotels.map((item) => <HotelCard key={item.id} {...item} />).slice(0, 4)}
    </div>
  </section>
);
