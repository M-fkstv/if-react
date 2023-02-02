import React, { useState, useEffect } from "react";

import { SliderButton } from "../SliderButton";
import { Slider } from "../Slider";
import { BaseURL } from "../../Constanst/links";
import "./Homes.css";

export const Homes = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch(BaseURL)
      .then((res) => res.json())
      .then((result) => setState(result));
  }, []);

  return (
    <section className="homes">
      <h2 className="h2-text">Homes guests</h2>

      <div className="add">
        {}
        <SliderButton className={"s-button-next"} />
        <SliderButton className={"s-button-prev"} />
        <Slider className="homes__examples" data={state} />
      </div>
    </section>
  );
};
