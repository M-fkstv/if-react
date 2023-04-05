import { combineReducers } from '@reduxjs/toolkit';
import { userReducer } from './user.slice';
import { authReducer } from './auth.slice';
import { availableReducer } from './available.slice';

export const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  availableHotels: availableReducer,
});

// export const rootReducer = {
//  auth: authReducer,
//   user: userReducer,
//   availableHotels: availableReducer,
// };
