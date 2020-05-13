import { call, put, takeLatest } from "redux-saga/effects";
import { Api } from "./api";
import { Actions, Events } from "./actions";

function* createTag(action) {
  try {
    yield put(Actions.createTag.request(true));
    const request = yield call(Api.createTag, action.payload);
    if (request.status === 201) {
      yield put(Actions.createTag.success(request.data));
    }
  } catch {
    yield put(Actions.createTag.failure(false));
  }
}


function* getTags() {
  try {
    yield put(Actions.getTags.request(true));
    const request = yield call(Api.getTags);
    if (request.status === 200) {
      yield put(Actions.getTags.success(request.data));
    }
  } catch {
    yield put(Actions.getTags.failure(false));
  }
}


function* deleteTag(action) {
  try {
    yield put(Actions.deleteTag.request(true));
    const request = yield call(Api.deleteTag, action.payload);
    if (request.status === 200) {
      yield put(Actions.deleteTag.success(request.data));
    }
  } catch {
    yield put(Actions.deleteTag.failure(false));
  }
}


function* getTag(action) {
  try {
    yield put(Actions.getTag.request(true));
    const request = yield call(Api.getTag, action.payload);
    if (request.status === 200) {
      yield put(Actions.getTag.success(request.data));
    }
  } catch {
    yield put(Actions.getTag.failure(false));
  }
}

export function* rootSagas() {
  yield takeLatest(Events.createTag, createTag);
  yield takeLatest(Events.getTags, getTags);
  yield takeLatest(Events.deleteTag, deleteTag);
  yield takeLatest(Events.getTag, getTag);
}