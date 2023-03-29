import { AVAILABLE } from '../../Constants/actionTypse';

export const setAvailableHotels = (payload) => ({
  type: AVAILABLE.setAvailable,
  payload,
});
