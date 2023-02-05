import React from "react";

import "./TopSection.css";
import { Header } from "../Header";
import { Form } from "../Form";
import { Apps } from "../Icons";

export const TopSection = () => {
  return (
    <>
      <div className="main__wrapper">
        <div className="main col-lg-12 col-xs-6">
          <Header />
          <h1 className="title-text">
            Discover stays <br />
            to live, work or just relax
          </h1>
          <Form />
        </div>
        <div className="apps">
          <Apps className="apps__google" id="#google" />
          <Apps className="apps__apple" id="#apple" />
        </div>
      </div>
    </>
  );
};
