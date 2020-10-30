import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';

/* EXPORT COMBINED REDUCERS FROM ALL COMPONENTS TO CREATE A BIG STATE */
export default combineReducers({
  user: userReducer,
});
