import { call, put, takeLatest } from "redux-saga/effects";
import { Api } from "./api";
import { Actions, Events } from "./actions";

function* getQuizz(action) {
  try {
    yield put(Actions.getQuizz.request(true));
    const request = yield call(Api.getQuizz, action.payload);
    if (request.status === 200) {
      yield put(Actions.getQuizz.success(request.data));
    }
  } catch {
    yield put(Actions.getQuizz.failure(false));
  }
}

function* sendQuizzForm(action) {
  console.log("sagas", action.payload);
  try {
    yield put(Actions.sendQuizzForm.request(true));
    const request = yield call(Api.sendQuizzForm, action.payload);
    if (request.status === 200 || request.status === 201) {
      yield put(Actions.sendQuizzForm.success(request.data));
    }
  } catch (error) {
    console.log(console.error);
    yield put(Actions.sendQuizzForm.failure(false));
  }
}

function* getThemes() {
  try {
    yield put(Actions.getThemes.request(true));
    const request = yield call(Api.getThemes);
    if (request.status === 200) {
      yield put(Actions.getThemes.success(request.data));
    }
  } catch {
    yield put(Actions.getThemes.failure(false));
  }
}

export function* rootSagas() {
  yield takeLatest(Events.getQuizz, getQuizz);
  yield takeLatest(Events.getThemes, getThemes);
  yield takeLatest(Events.sendQuizzForm, sendQuizzForm);
}
