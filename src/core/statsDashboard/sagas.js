import { call, put, takeLatest } from "redux-saga/effects";
import { Api } from "./api";
import { Actions, Events } from "./actions";


function* getStats() {
  try {
    yield put(Actions.getStats.request());
    const request = yield call(Api.getStats);
    if (request.status === 200) {
      yield put(Actions.getStats.success(request.data));
    }
  } catch {
    yield put(Actions.getStats.failure());
  }
}

export function* rootSagas() {
  yield takeLatest(Events.getStats, getStats);
}