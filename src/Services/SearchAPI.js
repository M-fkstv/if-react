import { BaseURL } from "../Constanst/links";

export const Search = async () => {
  const response = await fetch(BaseURL);
  return response.json();
};
