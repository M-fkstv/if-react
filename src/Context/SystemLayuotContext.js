import React, { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';

export const SystemLayuotContext = createContext();

export const SystemLayuot = () => {
  const [user, setUser] = useState(null);
  return (
    <SystemLayuotContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      <Outlet />
    </SystemLayuotContext.Provider>
  );
};
