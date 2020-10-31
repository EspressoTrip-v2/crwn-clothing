import { CartActionTypes } from './cart.types';

/* TOGGLE CART DROP DOWN */
export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

/* ADD ITEM TO CART */
export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});
