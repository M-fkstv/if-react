import React from 'react';
import { Apps } from '../Icons';
import { config } from './advantages.config';

import './Advantages.css';

export const Advantages = () => {
  return (
    <section className="offer col-xs-6">
      <h2 className="section-title">What do we offer</h2>

      <div className="advantages col-lg-12">
        {config.map((item, index) => {
          return (
            <div className="col-lg-3 col-md-5 col-xs-4" key={index}>
              <div className="advantages__icons">
                <Apps  className="advantages__icons--icon" id={item.id} />
                <p className="advantages__description">{item.descr}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
