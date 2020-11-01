import { CartActionTypes } from './cart.types';

import { addItemToCart, removeItemFromCart } from './cart.utils';

const cartReducer = (state = CartActionTypes.INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        /* DESTRUCTURE STATE AND ONLY CHANGE WHAT ACTION INVOKES */
        ...state,
        hidden: !state.hidden,
      };

    case CartActionTypes.ADD_ITEM:
      return {
        /* DESTRUCTURE STATE AND ONLY CHANGE WHAT ACTION INVOKES */
        ...state,
        /* DESTRUCTURE EXISTING ITEMS AND APPEND NEW PAYLOAD/ITEM */
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case CartActionTypes.REMOVE_ITEM:
      return {
        /* DESTRUCTURE STATE AND ONLY CHANGE WHAT ACTION INVOKES */
        ...state,
        /* DESTRUCTURE EXISTING ITEMS AND APPEND NEW PAYLOAD/ITEM */
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((cartItem) => cartItem.id !== action.payload.id),
      };

    default:
      return state;
  }
};

export default cartReducer;
