import { createAction, createAsyncAction } from "typesafe-actions";

export const Events = {
  getQuizz: createAction("quizz/get")(),
  getThemes: createAction("theme/get")(),
  sendQuizzForm: createAction("quizz/send")(),
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
  sendQuizzForm: createAsyncAction(
    "quizz/send/request",
    "quizz/send/success",
    "quizz/send/failure",
  )(),
  clearQuizzResponse: createAction("clear/quizz/response")(),
};
