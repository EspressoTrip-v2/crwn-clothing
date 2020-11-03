import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

/* ROOT REDUCER */
import rootReducer from './root.reducer';

/* REDUX PERSIST */
import { persistStore } from 'redux-persist';

/* PUT MIDDLEWARE IN ARRAY FOR BETTER SCALING */
const middlewares = [];
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

/* CREATE STORE */
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

/* PERSISTER */
export const persistor = persistStore(store);
