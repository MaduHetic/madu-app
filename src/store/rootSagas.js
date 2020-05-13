import { all } from "redux-saga/effects";
import { User } from "../core/user";

export default function* rootSaga() {
  yield all([User.sagas()]);
}
