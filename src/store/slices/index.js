import { persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';
import { userReducer } from './user.slice';
import { authReducer } from './auth.slice';
import { availableReducer } from './available.slice';

import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

export const rootReducer = persistReducer(
  persistConfig,
  combineReducers({
    auth: authReducer,
    user: userReducer,
    availableHotels: availableReducer,
  }),
);
