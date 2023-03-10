import React from 'react';

import './Main.css';
import { Header } from '../Header';
import { Form } from '../Form';
import { Apps } from '../Icons';

export const Main = ({ onSubmit }) => {
  return (
    <>
      <div className="main__wrapper">
        <div className="main col-lg-12 col-xs-6">
          <Header />
          <h1 className="title-text">
            Discover stays <br />
            to live, work or just relax
          </h1>
          <Form onSubmit={onSubmit} />
        </div>
        <div className="apps">
          <Apps className="apps__google" id="#google" />
          <Apps className="apps__apple" id="#apple" />
        </div>
      </div>
    </>
  );
};
