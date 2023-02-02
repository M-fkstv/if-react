import React from "react";

import "./AvailableHotelsClass.css";
import { SliderButton } from "../SliderButton";
import { Slider } from "../Slider";
import { HotelCard } from "../HotelCard";

export const AvailableHotels = ({ data }) => {
  if (data.length === 0) {
    return (
      <section className="homes">
        <h2 className="h2-text">Available hotels</h2>
        <p>Wrong</p>
      </section>
    );
  }
  if (data.length < 4) {
    return (
      <section className="homes">
        <h2 className="h2-text">Available hotels</h2>
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
      <h2 className="h2-text">Available hotels</h2>

      <div className="add">
        <SliderButton className={"s-button-next"} />
        <SliderButton className={"s-button-prev"} />
        <Slider className="homes__examples" data={data} />
      </div>
    </section>
  );
};
