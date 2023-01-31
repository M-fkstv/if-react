import React from "react";

import "./Section.css";
import { SliderButton } from "../SliderButton";
import { Slider } from "../Slider";

export const Section = ({ sectionName, data }) => (
  <section className="homes">
    <h2 className="h2-text">{sectionName}</h2>

    <div className="add">
      <SliderButton className={"s-button-next"} />
      <SliderButton className={"s-button-prev"} />
      <Slider className="homes__examples" data={data} />
    </div>
  </section>
);
