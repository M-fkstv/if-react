import { apiUrl } from '../Services/Constanst/links';
import { getHotels } from '../Services/HotelsCards/SearchAPI';

const cache = new Map();

export function fetchData(url) {
  if (!cache.has(url)) {
    cache.set(url, getData(url));
  }
  console.log('URL',cache.get(url));
  return cache.get(url);
}


export async function getData(url) {
  if (url === apiUrl) {
    return await getHotels();
  } else {
    throw Error('Not implemented');
  }

}


export function wrapPromise (promise) {
  
  if (promise.status === 'fulfilled') {
    console.log(promise.value);
    return promise.value;
  } else if (promise.status === 'rejected') {
    console.log(promise.reason);

    throw promise.reason;
  } else if (promise.status === 'pending') {
    console.log(promise);

    throw promise;
  } else {
    promise.status = 'pending';  
    console.log(promise.status);  
    promise.then(
      result => {
        promise.status = 'fulfilled';
        promise.value = result;
      },
      reason => {
        promise.status = 'rejected';
        promise.reason = reason;
      },
    );
    // debugger;
    throw promise;
  }
};
