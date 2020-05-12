import { call, put, takeLatest } from "redux-saga/effects";
import { Api } from "./api";
import { Actions, Events } from "./actions";

function* createGreenScoreType(action) {
  try {
    yield put(Actions.createGreenScoreType.request(true));
    const request = yield call(Api.createGreenScoreType, action.payload);
    if (request.status === 201) {
      yield put(Actions.createGreenScoreType.success(request.data));
    }
  } catch {
    yield put(Actions.createGreenScoreType.failure(false));
  }
}


function* getGreenScoreTypes() {
  try {
    yield put(Actions.getGreenScoreTypes.request(true));
    const request = yield call(Api.getGreenScoreTypes);
    if (request.status === 200) {
      yield put(Actions.getGreenScoreTypes.success(request.data));
    }
  } catch {
    yield put(Actions.getGreenScoreTypes.failure(false));
  }
}


function* deleteGreenScoreType(action) {
  try {
    yield put(Actions.deleteGreenScoreType.request(true));
    const request = yield call(Api.deleteGreenScoreType, action.payload);
    if (request.status === 200) {
      yield put(Actions.deleteGreenScoreType.success(request.data));
    }
  } catch {
    yield put(Actions.deleteGreenScoreType.failure(false));
  }
}


function* getGreenScoreType(action) {
  try {
    yield put(Actions.getGreenScoreType.request(true));
    const request = yield call(Api.getGreenScoreType, action.payload);
    if (request.status === 200) {
      yield put(Actions.getGreenScoreType.success(request.data));
    }
  } catch {
    yield put(Actions.getGreenScoreType.failure(false));
  }
}

export function* rootSagas() {
  yield takeLatest(Events.createGreenScoreType, createGreenScoreType);
  yield takeLatest(Events.getGreenScoreTypes, getGreenScoreTypes);
  yield takeLatest(Events.deleteGreenScoreType, deleteGreenScoreType);
  yield takeLatest(Events.getGreenScoreType, getGreenScoreType);
}