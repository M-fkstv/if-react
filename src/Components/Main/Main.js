import React from "react";

import "./Main.css";
import { Header } from "../Header";
import { Form } from "../Form";

export const Main = () => (
  <div className="main__wrapper">
    <div className="main col-lg-12 col-xs-6">
      <Header />
      <h1 className="h1-text">
        Discover stays <br />
        to live, work or just relax
      </h1>
      <Form />
    </div>
  </div>
);
