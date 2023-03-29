import { AVAILABLE } from '../../Constants/actionTypse';
import { INITIAL_STATE } from '../../Constants/initialState';

export const availableReducer = (state = INITIAL_STATE.availableHotels, action) => {
  switch (action.type) {
    case AVAILABLE.setAvailable:
      return [...action.payload];

    default:
      return state;
  }
};
