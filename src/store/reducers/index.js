import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './auth.reducer';
import { availableReducer } from './available.reducer';
import { userReducer } from './user.reducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  availableHotels : availableReducer,
});
