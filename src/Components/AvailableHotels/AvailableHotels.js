import React, { useContext } from "react";

import "./AvailableHotels.css";
import { SliderButton } from "../SliderButton";
import { Slider } from "../Slider";
import { HotelCard } from "../HotelCard";
import { AvailableHotelsContext } from "../../Context/AvailableHotelsContext";

export const AvailableHotels = () => {
  const { available } = useContext(AvailableHotelsContext);
  console.log(available)
  if (available.length === 0) {
    
    return (
      <section className="homes">
        <h2 className="h2-text">
          Available hotels
          <p>Error...</p>
        </h2>
      </section>
    );
  }
  if (available.length < 4) {
    return (
      <section className="homes">
        <h2 className="h2-text">Available hotels</h2>
        <div className="homes__examples">
          {available.map((item) => (
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
        <Slider className="homes__examples" data={available} />
      </div>
    </section>
  );
};
