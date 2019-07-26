import { takeLatest, call, put, all } from "redux-saga/effects";

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure
} from "./shopActions";

import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase";

import ShopActionTypes from "./shopActionTypes";

export function* fetchCollectionAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
