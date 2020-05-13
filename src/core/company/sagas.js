import { call, put, takeLatest } from "redux-saga/effects";
import { Api } from "./api";
import { Actions, Events } from "./actions";

function* getCompany(action) {
  try {
    yield put(Actions.getCompany.request(true));
    const request = yield call(Api.getCompany, action.payload);
    if (request.status === 200) {
      yield put(Actions.getCompany.success(request.data));
    }
  } catch {
    yield put(Actions.getCompany.failure(false));
  }
}


function* updateCompany(action) {
  try {
    yield put(Actions.updateCompany.request(true));
    const request = yield call(Api.updateCompany, action.payload);
    if (request.status === 200) {
      yield put(Actions.updateCompany.success(request.data));
    }
  } catch {
    yield put(Actions.updateCompany.failure(false));
  }
}


function* deleteCompany(action) {
  try {
    yield put(Actions.deleteCompany.request(true));
    const request = yield call(Api.deleteCompany, action.payload);
    if (request.status === 200) {
      yield put(Actions.deleteCompany.success(request.data));
    }
  } catch {
    yield put(Actions.deleteCompany.failure(false));
  }
}

function* getAllCompanies() {
  try {
    yield put(Actions.getAllCompanies.request());
    const request = yield call(Api.getAllCompanies);
    if (request.status === 200) {
      yield put(Actions.getAllCompanies.success(request.data));
    }
  } catch {
    yield put(Actions.getAllCompanies.failure(false));
  }
}

function* registerCompany(action) {
  try {
    yield put(Actions.registerCompany.request(true));
    const request = yield call(Api.registerCompany, action.payload);
    if (request.status === 201) {
      yield put(Actions.registerCompany.success(action.payload));
    }
  } catch {
    yield put(Actions.registerCompany.failure(false));
  }
}

export function* rootSagas() {
  yield takeLatest(Events.registerCompany, registerCompany);
  yield takeLatest(Events.getCompany, getCompany);
  yield takeLatest(Events.updateCompany, updateCompany);
  yield takeLatest(Events.deleteCompany, deleteCompany);
  yield takeLatest(Events.getAllCompanies, getAllCompanies);
}