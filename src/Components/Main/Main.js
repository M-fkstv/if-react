import React, { useState } from "react";

import "./Main.css";
import { Header } from "../Header";
import { Form } from "../Form";
import { Apps } from "../Icons";
import { Section } from "../Section";

export const Main = ({ onChange }) => {
  const [state, setState] = useState([]);

  const handleSubmit = (value) => {
    setState(value);
  };
  return (
    <>
      <div className="main__wrapper">
        <div className="main col-lg-12 col-xs-6" onChange={onChange}>
          <Header />
          <h1 className="title-text">
            Discover stays <br />
            to live, work or just relax
          </h1>
          <Form onSubmit={handleSubmit} />
          {/*<Example onSubmit={handleSubmit} />*/}
        </div>
        <div className="apps">
          <Apps className="apps__google" id="#google" />
          <Apps className="apps__apple" id="#apple" />
        </div>
      </div>
      {state.length > 0 ? (
        <Section sectionName={"available"} data={state} />
      ) : (
        false
      )}
    </>
  );
};
