import { call, put, takeLatest } from "redux-saga/effects";
import { Api } from "./api";
import { Actions, Events } from "./actions";

function* getKnowIt() {
  try {
    yield put(Actions.getKnowIt.request(true));
    const request = yield call(Api.getKnowIt);
    if (request.status === 200) {
      yield put(Actions.getKnowIt.success(request.data));
    }
  } catch {
    yield put(Actions.getKnowIt.failure(false));
  }
}

export function* rootSagas() {
  yield takeLatest(Events.getKnowIt, getKnowIt);
}
