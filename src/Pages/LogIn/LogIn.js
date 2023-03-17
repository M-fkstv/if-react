import React, { useId } from 'react';
import { Button } from '../../Components/Form/Button';
import { Header } from '../../Components/Header';

import './LogIn.css';

export const LogIn = () => {
  const emailId = useId();
  const passwordId = useId();

  return (
    <>
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
              placeholder="Enter your email"
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
              placeholder="Enter password"
            />
          </div>
          <Button btnText="Sign in" className="log-in__submit" />
        </form>
      </div>
    </>
  );
};
