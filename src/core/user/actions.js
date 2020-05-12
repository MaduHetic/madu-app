import { createAction, createAsyncAction } from "typesafe-actions";

export const Events = {
  signIn: createAction("user/sign/in/send")(),
  signUp: createAction("user/sign/up/send")(),
  getCurrentUser: createAction('user/get/profile')(),
};

export const Actions = {
  signIn: createAsyncAction(
    "user/sign/in/send/request",
    "user/sign/in/send/success",
    "user/sign/in/send/failure"
  )(),
  signUp: createAsyncAction(
    "user/sign/up/send/request",
    "user/sign/up/send/success",
    "user/sign/up/send/failure"
  )(),
  signOut: createAction("user/sign/out")(),
  getCurrentUser: createAsyncAction(
    'user/get/profile/request',
    'user/get/profile/success',
    'user/get/profile/failure'
  )(),
};