import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './slices';
// import { rootReducer } from './reducers';

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});
