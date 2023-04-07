import React from 'react';
import { Provider } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import { Loader } from '../Components/Loader/Loader';
import { persistor, store } from '../store';

// export const SystemLayuotContext = createContext();  оставить для примера

export const SystemLayuot = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        <Outlet />
      </PersistGate>
    </Provider>
  );
};
