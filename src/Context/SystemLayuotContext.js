import React, { createContext, useState } from 'react';
import { Provider } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { store } from '../store';

export const SystemLayuotContext = createContext();

export const SystemLayuot = () => {
  // const [user, setUser] = useState(null);
  return (
    // <SystemLayuotContext.Provider
    //   value={{
    //     user,
    //     setUser,
    //   }}>
    <Provider store={store}>
      <Outlet />
    </Provider>
    //</SystemLayuotContext.Provider>
  );
};
