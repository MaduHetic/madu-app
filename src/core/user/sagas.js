import { call, put, takeLatest } from "redux-saga/effects";
import { Api } from "./api";
import { Actions, Events } from "./actions";

import { saveCredentialsInStorage } from "../../middlewares/saveCredentials";

function* getCurrentUser() {
  try {
    yield put(Actions.getCurrentUser.request(true));
    const request = yield call(Api.getCurrentUser);
    if (request.status === 200) {
      yield put(Actions.getCurrentUser.success(request.data));
    }
  } catch {
    yield put(Actions.getCurrentUser.failure(false));
  }
}

function* signIn(action) {
  try {
    yield put(Actions.signIn.request(true));
    const request = yield call(Api.signIn, action.payload);
    if (request.status === 201) {
      yield call(saveCredentialsInStorage, request.data.access_token);
      yield call(getCurrentUser);
      yield put(Actions.signIn.success(request.data.access_token));
    }
  } catch {
    yield put(Actions.signIn.failure(false));
  }
}

function* signUp(action) {
  try {
    yield put(Actions.signUp.request(true));
    const request = yield call(Api.signOut, action.payload);
    console.log(request);

    if (request.status === 201) {
      yield put(Actions.signUp.success(request));
      console.log(request);
    }
  } catch {
    yield put(Actions.signUp.failure(false));
  }
}

export function* rootSagas() {
  yield takeLatest(Events.signIn, signIn);
  yield takeLatest(Events.signUp, signUp);
  yield takeLatest(Events.getCurrentUser, getCurrentUser);
}
