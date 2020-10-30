import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root.reducer';

/* PUT MIDDLEWARE IN ARRAY FOR BETTER SCALING */
const middlewares = [logger];

/* CREATE STORE */
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
