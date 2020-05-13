import { call, put, takeLatest } from "redux-saga/effects";
import { Api } from "./api";
import { Actions, Events } from "./actions";

function* signIn(action) {
  try {
    yield put(Actions.signIn.request(true));
    console.log(yield call(Api.signIn, action.payload));
    const request = yield call(Api.signIn, action.payload);
    console.log(request);
    if (request.status === 201) {
      yield put(Actions.signIn.success(request.data.access_token));
    }
  } catch {
    yield put(Actions.signIn.failure(false));
  }
}

export function* rootSagas() {
  yield takeLatest(Events.signIn, signIn);
}
