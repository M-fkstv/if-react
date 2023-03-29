import React, { createContext } from 'react';
import { Provider } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { store } from '../store';

export const SystemLayuotContext = createContext();

export const SystemLayuot = () => {
  return (
    <Provider store={store}>
      <Outlet />
    </Provider>
  );
};
