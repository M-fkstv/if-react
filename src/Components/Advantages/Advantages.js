import React from 'react';
import { Apps } from '../Icons';
import { config } from './advantages.config';


import { useStyles } from './advantages.styles';

export const Advantages = () => {
  const classes = useStyles();
  return (
    <section className={classes.offer}>
      <h2 className="section-title">What do we offer</h2>

      <div className={classes.advantages}>
        {config.map((item, index) => {
          return (
            <div className="col-lg-3 col-md-5 col-xs-4" key={index}>
              <div className={classes.icons}>
                <Apps className={classes.iconsIcon} id={item.id} />
                <p className={classes.description}>{item.descr}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
