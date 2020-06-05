import { createAction, createAsyncAction } from "typesafe-actions";

export const Events = {
  getKnowIt: createAction("get/know/it")(),
};

export const Actions = {
  getKnowIt: createAsyncAction(
    "get/know/it/request",
    "get/know/it/success",
    "get/know/it/failure",
  )(),
};
