import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_STATE } from '../../Constants/initialState';


export const authSlice = createSlice({
  name: 'auth',
  initialState: INITIAL_STATE.auth ,
  redusers: {
    setStatus:(state,action) =>({...state, status:action.payload}),
  },
});

export const { setStatus } = authSlice.actions;

export const authReducer =  authSlice.reducer;
