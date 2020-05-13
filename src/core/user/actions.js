import { createAction, createAsyncAction } from "typesafe-actions";

export const Events = {
  signIn: createAction("user/sign/in/send")(),
};

export const Actions = {
  signIn: createAsyncAction(
    "user/sign/in/send/request",
    "user/sign/in/send/success",
    "user/sign/in/send/failure",
  )(),
};
