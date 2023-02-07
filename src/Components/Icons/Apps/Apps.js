import React from "react";

import "./Apps.css";

export const Apps = ( className, id ) => (
  <svg className={className}>
    <use href={id} />
  </svg>
);
