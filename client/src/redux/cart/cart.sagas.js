import { all, takeLatest, call, put } from 'redux-saga/effects';

/* ACTION TYPES */
import UserActionTypes from '../user/user.types';

/* ACTIONS */
import { clearCart } from './cart.actions';

/* CLEAR CART */
export function* clearCartSuccess() {
  yield put(clearCart());
}

export function* onClearCart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartSuccess);
}

export function* cartSagas() {
  yield all([call(onClearCart)]);
}
