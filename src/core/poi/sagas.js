import { call, put, takeLatest } from "redux-saga/effects";
import { Api } from "./api";
import { Actions, Events } from "./actions";

function* registerPoi(action) {
  try {
    yield put(Actions.registerPoi.request(true));
    const request = yield call(Api.registerPoi, action.payload);
    if (request.status === 201) {
      yield put(Actions.registerPoi.success(request.data));
    }
  } catch {
    yield put(Actions.registerPoi.failure(false));
  }
}


function* getPoi(action) {
  try {
    yield put(Actions.getPoi.request(true));
    const request = yield call(Api.getPoi, action.payload);
    if (request.status === 200) {
      yield put(Actions.getPoi.success(request.data));
    }
  } catch {
    yield put(Actions.getPoi.failure(false));
  }
}


function* updatePoi(action) {
  try {
    yield put(Actions.updatePoi.request(true));
    const request = yield call(Api.updatePoi, action.payload);
    if (request.status === 200) {
      yield put(Actions.updatePoi.success(request.data));
    }
  } catch {
    yield put(Actions.updatePoi.failure(false));
  }
}


function* deletePoi(action) {
  try {
    yield put(Actions.deletePoi.request(true));
    const request = yield call(Api.deletePoi, action.payload);
    if (request.status === 200) {
      yield put(Actions.deletePoi.success(request.data));
    }
  } catch {
    yield put(Actions.deletePoi.failure(false));
  }
}

function* getAllPoi() {
  try {
    yield put(Actions.getAllPoi.request(true));
    const request = yield call(Api.getAllPoi);
    if (request.status === 200) {
      yield put(Actions.getAllPoi.success(request.data));
    }
  } catch {
    yield put(Actions.getAllPoi.failure(false));
  }
}

export function* rootSagas() {
  yield takeLatest(Events.registerPoi, registerPoi);
  yield takeLatest(Events.getPoi, getPoi);
  yield takeLatest(Events.updatePoi, updatePoi);
  yield takeLatest(Events.deletePoi, deletePoi);
  yield takeLatest(Events.getAllPoi, getAllPoi);
}