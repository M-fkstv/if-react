import React, { useContext, useId } from 'react';
import { ScrollRestoration, useNavigate } from 'react-router-dom';

import { SystemLayuotContext } from '../../Context/SystemLayuotContext';

import { Button } from '../../Components/Button';
import { Header } from '../../Components/Header';
import { Sprite } from '../../Components/Sprite';

import './LogIn.css';

export const LogIn = () => {
  const emailId = useId();
  const passwordId = useId();
  const navigate = useNavigate();
  const { setUser } = useContext(SystemLayuotContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setUser({
      user: {
        email: formData.get('email'),
        password: formData.get('password'),
      },
    });

    navigate('/');
    sessionStorage.setItem('user', JSON.stringify({'email':formData.get('email'),'password': formData.get('password')}));
  };

  return (
    <>
      <Sprite />
      <ScrollRestoration />
      <div className="log-in">
        <Header />
        <form className="log-in__form" onSubmit={handleSubmit}>
          <h1>Sign in</h1>
          <div className="wrapper">
            <label className="log-in__label" htmlFor={emailId}>
              Email address
            </label>
            <input name="email" className="log-in__input" id={emailId} type="text" />
          </div>
          <div className="wrapper">
            <label className="log-in__label" htmlFor={passwordId}>
              Password
            </label>
            <input name="password" className="log-in__input" id={passwordId} type="password" />
          </div>

          <Button btnText="Sign in" className="log-in__submit" />
        </form>
      </div>
    </>
  );
};
