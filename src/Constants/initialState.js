import { authStatuses } from './authStatuses';

export const INITIAL_STATE = {
  auth: {
    // status: 'logged-out',
    status: authStatuses.loggedOut,
  },
};
