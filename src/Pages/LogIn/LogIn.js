import React, { useId } from 'react';
import { useDispatch } from 'react-redux';
import { ScrollRestoration, useNavigate } from 'react-router-dom';

import { Button } from '../../Components/Button';
import { Header } from '../../Components/Header';
import { Sprite } from '../../Components/Sprite';

import { authStatuses } from '../../Constants/authStatuses';
import { PATH } from '../../Constants/paths';

import { setStatus } from '../../store/slices/auth.slice';
import { setUser } from '../../store/slices/user.slice';

import './LogIn.css';
// import { setAuthStatus, setUser } from '../../store/actions';

export const LogIn = () => {
  const emailId = useId();
  const passwordId = useId();
  const navigate = useNavigate();
  const dispatch = useDispatch();
 

  
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');
    
    if (email && password !== '') {
     
      dispatch(setStatus(authStatuses.loggedIn));
      dispatch(setUser({ email, password }));
      sessionStorage.setItem('user', JSON.stringify({ email, password }));
      navigate(PATH.index);
    }
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
            <input
              name="email"
              className="log-in__input"
              id={emailId}
              type="text"
              autoComplete="off"
            />
          </div>
          <div className="wrapper">
            <label className="log-in__label" htmlFor={passwordId}>
              Password
            </label>
            <input name="password" className="log-in__input" id={passwordId} type="password" />
          </div>

          <Button btnText="Sign in" className="log-in__submit" type="submit" />
        </form>
      </div>
    </>
  );
};
