import { USER } from '../../Constants/actionTypse';

export const setUser = (payload) => ({
  type: USER.setUser,
  payload,
});
