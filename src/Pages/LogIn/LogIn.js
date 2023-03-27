import React, { useId } from 'react';
import { ScrollRestoration, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Button } from '../../Components/Button';
import { Header } from '../../Components/Header';
import { Sprite } from '../../Components/Sprite';

import { PATH } from '../../Constants/paths';
import { authStatuses } from '../../Constants/authStatuses';
import { loginAction, setAuthStatus } from '../../store/actions/auth.actions';

import './LogIn.css';

export const LogIn = () => {
  const emailId = useId();
  const passwordId = useId();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const { setUser } = useContext(SystemLayuotContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');
    // setUser({  // for SystemLayuotContext
    //   user: {
    //     email: email,
    //     password: password,
    //   },
    // });

    if (email && password !== '') {
      // dispatch(loginAction);
      dispatch(setAuthStatus(authStatuses.loggedIn));
      sessionStorage.setItem('user', JSON.stringify({ email: email, password: password }));
      navigate(PATH.index);
    }
    // {sessionStorage.setItem(
    //   'user',
    //   JSON.stringify({ email: email, password: password }),
    // );}
    // if(loggedIn){
    // navigate('/');
    // }
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
