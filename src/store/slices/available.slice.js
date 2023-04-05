import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_STATE } from '../../Constants/initialState';


export const availableHotelsSlice = createSlice({
  name: 'available',
  initialState: INITIAL_STATE.availableHotels ,
  redusers: {
    setAvailable:(state, action) => [...state, action.payload],
  },
});

export const { setAvailableHotels } = availableHotelsSlice.actions;

export const availableReducer =  availableHotelsSlice.reducer;