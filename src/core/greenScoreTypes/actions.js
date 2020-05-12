import { createAction, createAsyncAction } from "typesafe-actions";

export const Events = {
  createGreenScoreType: createAction("greenScoreType/create")(),
  getGreenScoreType: createAction("GreenScoreType/get")(),
  getGreenScoreTypes: createAction("greenScoreTypes/get")(),
  deleteGreenScoreType: createAction("greenScoreType/delete")(),
};

export const Actions = {
  createGreenScoreType: createAsyncAction(
    "greenScoreType/create/request",
    "greenScoreType/create/success",
    "greenScoreType/create/failure"
  )(),
  getGreenScoreTypes: createAsyncAction(
    "greenScoreTypes/get/request",
    "greenScoreTypes/get/success",
    "greenScoreTypes/get/failure"
  )(),
  deleteGreenScoreType: createAsyncAction(
    "greenScoreType/delete/request",
    "greenScoreType/delete/success",
    "greenScoreType/delete/failure"
  )(),
  getGreenScoreType: createAsyncAction(
    "greenScoreType/get/request",
    "greenScoreType/get/success",
    "greenScoreType/get/failure"
  )(),
};