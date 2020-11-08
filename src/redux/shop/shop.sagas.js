import { all, takeLatest, call, put } from 'redux-saga/effects';

/* FIREBASE */
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

/* IMPORT ACTION TYPES */
import ShopActionTypes from './shop.types';

/* IMPORT ACTIONS */
import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shop.actions';

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot); // use call() when invoking functions

    yield put(fetchCollectionsSuccess(collectionsMap)); // put() invokes dispatch in redux
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
