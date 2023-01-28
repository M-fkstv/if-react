import React from "react";

import "./Section.css";
import { SliderButton } from "../SliderButton";
import { Slider } from "../Slider";
import { HotelCard } from "../HotelCard";

export const Section = ({ sectionName, data }) => {
  if (data.length < 4) {
    return (
      <section className="homes">
        <h2 className="h2-text">{sectionName}</h2>
        <div className="homes__examples">
          {data.map((item) => (
            <HotelCard key={item.id} {...item} />
          ))}
        </div>
      </section>
    );
  }
  return (
    <section className="homes">
      <h2 className="h2-text">{sectionName}</h2>

      <div className="add">
        <SliderButton className={"s-button-next"} />
        <SliderButton className={"s-button-prev"} />
        <Slider className="homes__examples" data={data} />
      </div>
    </section>
  );
};
