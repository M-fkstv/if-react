import { AUTH } from '../../Constants/actionTypse';
import { authStatuses } from '../../Constants/authStatuses';

export const loginAction = {
  // type: 'auth/log-in',
  type: AUTH.login,
  payload: authStatuses.loggedIn,
};

export const logoutAction = {
  // type: 'auth/log-out',
  type: AUTH.logout,
  payload: authStatuses.loggedOut,
};
