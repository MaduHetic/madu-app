import { createAction, createAsyncAction } from "typesafe-actions";

export const Events = {
  getQuizz: createAction("quizz/get")(),
  getThemes: createAction("theme/get")(),
};

export const Actions = {
  getQuizz: createAsyncAction(
    "quizz/get/request",
    "quizz/get/success",
    "quizz/get/failure",
  )(),
  getThemes: createAsyncAction(
    "theme/get/request",
    "theme/get/success",
    "theme/get/failure",
  )(),
};
