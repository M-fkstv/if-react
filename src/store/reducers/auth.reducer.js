import { AUTH } from '../../Constants/actionTypse';
import { INITIAL_STATE } from '../../Constants/initialState';

export const authReducer = (state = INITIAL_STATE.auth, action) => {
  switch (action.type) {
    case AUTH.setStatus:
      return { ...state, status: action.payload };

    default:
      return state;
  }
};
