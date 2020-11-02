import { combineReducers } from 'redux';

/* REDUX PERSIST */
import { persistReducer } from 'redux-persist';
/* IMPORT LOCAL STORAGE FILE FOR REDIX PERSIST */
import storage from 'redux-persist/lib/storage';

/* COMPONENT REDUCERS */
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

/* STORAGE CONFIG */
const storageConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

/* CREATE THE ROOT REDUCER */
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

/* EXPORT COMBINED REDUCERS WITH THE PERSIST CONFIG ENCAPSULATION */
export default persistReducer(storageConfig, rootReducer);
