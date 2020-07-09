import { call, put, takeLatest } from "redux-saga/effects";
import { Api } from "./api";
import { Actions, Events } from "./actions";

function* getChallenge() {
  try {
    yield put(Actions.getChallenge.request(true));
    const request = yield call(Api.getChallenge);
    if (request.status === 200) {
      yield put(Actions.getChallenge.success(request.data));
    }
  } catch {
    yield put(Actions.getChallenge.failure(false));
  }
}

function* addChallenge(action) {
  try {
    yield put(Actions.addChallenge.request(true));
    const request = yield call(Api.addChallenge, action.payload);
    if (request.status === 200) {
      yield put(Actions.addChallenge.success(request.data));
    }
  } catch {
    yield put(Actions.addChallenge.failure(false));
  }
}

export function* rootSagas() {
  yield takeLatest(Events.getChallenge, getChallenge);
  yield takeLatest(Events.addChallenge, addChallenge);
}
