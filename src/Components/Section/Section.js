import React, { Fragment } from "react";
import { HotelCard } from "../HotelCard";
import { hotels } from "../HotelCard/config";

import "./Section.css";

export const Section = ({ h2Text }) => (
  <section className="homes">
    <h2 className="h2-text">{h2Text}</h2>
    <div className="homes__examples">
      {hotels.map((item) => (
        <Fragment key={item.id}>
          <HotelCard {...item} />
        </Fragment>
      ))}
    </div>
  </section>
);
