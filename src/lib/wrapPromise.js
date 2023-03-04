import { apiUrl } from '../Services/Constanst/links';
import { getHotels } from '../Services/HotelsCards/SearchAPI';

const cache = new Map();

export function fetchData(url) {
  if (!cache.has(url)) {
    cache.set(url, getData(url));
    console.log(getData(url));
  }
  console.log(cache);
  return cache.get(url);
}

async function getData(url) {
  if (url === apiUrl) {
    console.log(url === apiUrl);
    console.log (await getHotels(apiUrl));
    // debugger;
    return await getHotels(apiUrl);
  } else {
    throw Error('Not implemented');
  }
}

export const wrapPromise = (promise) => {
  if (promise.status === 'fulfilled') {
    return promise.value;
  } else if (promise.status === 'rejected') {
    throw promise.reason;
  } else if (promise.status === 'pending') {
    throw promise;
  } else {
    promise.status = 'pending';
    promise.then(
      (result) => {
        promise.status = 'fulfilled';
        promise.value = result;
        console.log(result);
      },
      (reason) => {
        promise.status = 'rejected';
        promise.reason = reason;
      },
    );
    console.log(promise);
    throw promise;
  }
};
