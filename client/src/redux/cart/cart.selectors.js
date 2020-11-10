import { createSelector } from 'reselect';

/* GET THE CART STATE */
const selectCart = (state) => state.cart;

/* CART ITEMS SELECTOR */
export const selectCartItems = createSelector([selectCart], (cart) => cart.cartItems);

/* CART HIDDEN SELECTOR */
export const selectCartHidden = createSelector([selectCart], (cart) => cart.hidden);

/* SELECTOR TO ADD QUANTITY ITEMS IN CART */
export const selectCartItemsCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((sum, item) => {
    return sum + item.quantity;
  }, 0)
);

/* ADD PRICE OF ALL ITEMS IN THE CART */
export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((sum, item) => {
    return sum + item.quantity * item.price;
  }, 0)
);
