import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

/* ROOT REDUCER */
import rootReducer from './root.reducer';

/* REDUX PERSIST */
import { persistStore } from 'redux-persist';

/* SAGA IMPORTS */
import rootSaga from './root.saga';

/* INSTANTIATE SAGA */
const sagaMiddleware = createSagaMiddleware();

/* PUT MIDDLEWARE IN ARRAY FOR BETTER SCALING */
const middlewares = [sagaMiddleware];
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

/* CREATE STORE */
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

/* RUN SAGA MIDDLEWARE */
sagaMiddleware.run(rootSaga);

/* PERSISTER */
export const persistor = persistStore(store);
