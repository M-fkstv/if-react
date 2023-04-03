import { USER } from '../../Constants/actionTypse';
import { INITIAL_STATE } from '../../Constants/initialState';

export const userReducer = (state = INITIAL_STATE.user, action) => {
  switch (action.type) {
    case USER.setUser:
      return { ...action.payload };

    default:
      return state;
  }
};
