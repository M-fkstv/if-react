import { BaseURL } from "../Constanst/links";

export const getHotels = async () => {
  const response = await fetch(BaseURL);
  return response.json();
};
