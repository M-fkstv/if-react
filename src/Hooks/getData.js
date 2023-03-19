import { apiUrl } from '../services/Constanst/links';
import { getHotels } from '../services/SearchApi/SearchAPI';

export async function getData(url) {
  console.log(apiUrl.search);
  if (url === apiUrl) {
    return await getHotels(apiUrl);
  } else {
    throw Error('Not implemented');
  }
}
