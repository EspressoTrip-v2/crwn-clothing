import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

/* EXPORT COMBINED REDUCERS FROM ALL COMPONENTS TO CREATE STORE */
export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});
