import React, { useId } from 'react';
import { Button } from '../../Components/Button';
import { Header } from '../../Components/Header/Header.js';
import { Sprite } from '../../Components/Sprite';

import './LogIn.css';

export const LogIn = () => {
  const emailId = useId();
  const passwordId = useId();

  return (
    <>
      <Sprite/>
      <div className="log-in">
        <Header />
        <form className="log-in__form">
          <h1>Sign in</h1>
          <div className="wrapper">
            <label className="log-in__label" htmlFor={emailId}>
              Email address
            </label>
            <input
              className="log-in__input"
              id={emailId}
              type="email"
            />
          </div>
          <div className="wrapper">
            <label className="log-in__label" htmlFor={passwordId}>
              Password
            </label>
            <input
              className="log-in__input"
              id={passwordId}
              type="text"
            />
          </div>

          <Button btnText="Sign in" className="log-in__submit" />
        </form>

      </div>
    </>
  );
};
