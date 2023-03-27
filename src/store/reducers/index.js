import { AUTH } from '../../Constants/actionTypse';
import { INITIAL_STATE } from '../../Constants/initialState';

export const rootReducer = (state = INITIAL_STATE, action) => {
  const newState = structuredClone(INITIAL_STATE);

  switch (action.type) {
    case AUTH.login:
    case AUTH.logout:
      newState.auth.status = action.payload;
      return newState;

    default:
      return newState;
  }
};
