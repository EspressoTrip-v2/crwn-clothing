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

/* REMOVE ITEM TO CART */
export const removeItem = (item) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item,
});

/* CLEAR ITEM FRM CART */
export const clearItemFromCart = (item) => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
});
