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
    }
  } catch (error) {
    yield put(Actions.signIn.failure(error.response.data.message));
  }
}

function* signUp(action) {
  try {
    yield put(Actions.signUp.request(true));
    const request = yield call(Api.signUp, action.payload);
    if (request.status === 201) {
      console.log(request);
      yield call(saveCredentialsInStorage, request.data.access_token);
      yield call(getCurrentUser);
    }
  } catch (error) {
    yield put(Actions.signUp.failure(error.response.data.message));
  }
}

export function* rootSagas() {
  yield takeLatest(Events.signIn, signIn);
  yield takeLatest(Events.signUp, signUp);
  yield takeLatest(Events.getCurrentUser, getCurrentUser);
}
