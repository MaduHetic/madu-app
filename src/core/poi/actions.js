import { createAction, createAsyncAction } from "typesafe-actions";

export const Events = {
  registerPoi: createAction("poi/register")(),
  getPoi: createAction("poi/get")(),
  updatePoi: createAction("poi/update")(),
  deletePoi: createAction("poi/delete")(),
  getAllPoi: createAction("poi/get/all")(),
};

export const Actions = {
  registerPoi: createAsyncAction(
    "poi/register/request",
    "poi/register/success",
    "poi/register/failure"
  )(),
  getPoi: createAsyncAction(
    "poi/get/request",
    "poi/get/success",
    "poi/get/failure"
  )(),
  updatePoi: createAsyncAction(
    "poi/update/request",
    "poi/update/success",
    "poi/update/failure"
  )(),
  deletePoi: createAsyncAction(
    "poi/delete/request",
    "poi/delete/success",
    "poi/delete/failure"
  )(),
  getAllPoi: createAsyncAction(
    "poi/get/all/request",
    "poi/get/all/success",
    "poi/get/all/failure"
  )(),
};