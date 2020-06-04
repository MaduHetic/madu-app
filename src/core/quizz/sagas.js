import { call, put, takeLatest } from "redux-saga/effects";
import { Api } from "./api";
import { Actions, Events } from "./actions";

function* getQuizz() {
  try {
    yield put(Actions.getQuizz.request(true));
    const request = yield call(Api.getQuizz);
    if (request.status === 200) {
      console.log(request.data);
      yield put(Actions.getQuizz.success(request.data));
    }
  } catch {
    yield put(Actions.getQuizz.failure(false));
  }
}

export function* rootSagas() {
  yield takeLatest(Events.getQuizz, getQuizz);
}
