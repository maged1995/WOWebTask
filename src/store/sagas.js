import { all } from "redux-saga/effects";
import photosSagas from "./photos/sagas";

export default function* rootSaga() {
  const combinedSagas = [
    ...photosSagas,
  ].map(saga => saga());
  yield all(combinedSagas);
}
