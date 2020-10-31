import { CartActionTypes } from './cart.types';

import { addItemToCart } from './cart.utils';

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

    default:
      return state;
  }
};

export default cartReducer;
