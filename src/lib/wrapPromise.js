import { apiUrl } from '../Services/Constanst/links';
import { getHotels } from '../Services/HotelsCards/SearchAPI';

const cache = new Map();

export function fetchData(url) {
  console.log('NO URL',cache);
  if (!cache.has(url)) {
    cache.set(url, getData(url));
  }
  console.log('URL',cache);
  return cache.get(url);
}

async function getData(url) {
  if (url === apiUrl) {
    console.log(url === apiUrl);
    // console.log(await getHotels(apiUrl));
    // debugger;
    return await getHotels(apiUrl);
  } else {
    throw Error('Not implemented');
  }
  
}


export const wrapPromise = (promise) => {
  console.log(promise);
  if (promise.status === 'fulfilled') {
    console.log(promise.status);
    return promise.value;
  } else if (promise.status === 'rejected') {
    console.log(promise.status);

    throw promise.reason;
  } else if (promise.status === 'pending') {
    console.log(promise.status);

    throw promise;
  } else {
    promise.status = 'pending';
    console.log(promise.status);
    promise.then(
      (result) => {
        promise.status = 'fulfilled';
        promise.value = result;
      },
      (reason) => {
        promise.status = 'rejected';
        promise.reason = reason;
      },
    );
    throw promise;
  }
};
