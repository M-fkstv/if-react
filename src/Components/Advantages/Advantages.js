import React from 'react';
import { Apps } from '../Icons';
import { config } from './advantages.config';

import { useStyles } from './advantages.styles';
import { useIndexStyles } from '../../index.styles';

export const Advantages = () => {
  const insexClasses = useIndexStyles();
  const classes = useStyles();

  return (
    <section className={classes.offer}>
      <h2 className={insexClasses.sectionTitle}>What do we offer</h2> 

      <div className={classes.advantages } >
        {config.map((item, index) => {
          return (
            <div className={insexClasses.colLg3} key={index}>
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
