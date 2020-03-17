import { takeLatest, call, put } from "redux-saga/effects";
import { request } from "../requestHelpers";
import { fetchPhotos } from "./actions";

function* fetchPhotosEffect({ payload: { search } }) {
  try {
    const response = yield call(
      request,
      {
        url: `/photos`,
        method: `GET`,
        params: { name: search },
      },
      `photos`,
    );

    console.log(response);

    yield put(fetchPhotos.success(response.data));
  } catch (error) {
    yield put(fetchPhotos.failure(error));
  }
}

function* fetchPhotosWatcher() {
  yield takeLatest(fetchPhotos.request, fetchPhotosEffect);
}

export default [fetchPhotosWatcher];
