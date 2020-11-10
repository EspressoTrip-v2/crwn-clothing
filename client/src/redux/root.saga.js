import { all, call } from 'redux-saga/effects';

/* IMPORT SAGAS */
import { shopSagas } from './shop/shop.sagas';
import { userSagas } from './user/user.sagas';
import { cartSagas } from './cart/cart.sagas';

/* ROOT SAGA GENERATOR RUNS ALL */

export default function* rootSaga() {
  yield all([call(shopSagas), call(userSagas), call(cartSagas)]);
}
