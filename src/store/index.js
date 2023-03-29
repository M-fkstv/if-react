import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducers';

// export const store = createStore(rootReducer);
export const store = configureStore({
  reducer: rootReducer,
});
