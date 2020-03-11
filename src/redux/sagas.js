import { all } from "redux-saga/effects";

export default function* rootSaga() {
  const combinedSagas = [
  ].map(saga => saga());
  yield all(combinedSagas);
}
