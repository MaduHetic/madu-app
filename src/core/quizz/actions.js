import { createAction, createAsyncAction } from "typesafe-actions";

export const Events = {
  getQuizz: createAction("quizz/get")(),
};

export const Actions = {
  getQuizz: createAsyncAction(
    "quizz/get/request",
    "quizz/get/success",
    "quizz/get/failure",
  )(),
};
