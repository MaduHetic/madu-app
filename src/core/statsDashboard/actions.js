import { createAction, createAsyncAction } from "typesafe-actions";

export const Events = {
  getStats: createAction("stats/get")()
};

export const Actions = {
  getStats: createAsyncAction(
    "stats/get/request",
    "stats/get/success",
    "stats/get/failure"
  )()
};