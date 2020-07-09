import { createAction, createAsyncAction } from "typesafe-actions";

export const Events = {
  getChallenge: createAction("get/challenge")(),
  addChallenge: createAction("post/challenge")(),
  challengeCurrent: createAction("get/current/challenge")(),
  validateChallenge: createAction("post/validate/challenge")(),
};

export const Actions = {
  getChallenge: createAsyncAction(
    "get/challenge/request",
    "get/challenge/success",
    "get/challenge/failure",
  )(),
  addChallenge: createAsyncAction(
    "post/challenge/request",
    "post/challenge/success",
    "post/challenge/failure",
  )(),
  challengeCurrent: createAsyncAction(
    "get/current/challenge/request",
    "get/current/challenge/success",
    "get/current/challenge/failure",
  )(),
  validateChallenge: createAsyncAction(
    "post/validate/challenge/request",
    "post/validate/challenge/success",
    "post/validate/challenge/failure",
  )(),
};
