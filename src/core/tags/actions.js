import { createAction, createAsyncAction } from "typesafe-actions";

export const Events = {
  createTag: createAction("tag/create")(),
  getTags: createAction("tags/get")(),
  deleteTag: createAction("tag/get")(),
  getTag: createAction("tag/delete")(),
};

export const Actions = {
  createTag: createAsyncAction(
    "tag/create/request",
    "tag/create/success",
    "tag/create/failure"
  )(),
  getTags: createAsyncAction(
    "tags/get/request",
    "tags/get/success",
    "tags/get/failure"
  )(),
  deleteTag: createAsyncAction(
    "tag/delete/request",
    "tag/delete/success",
    "tag/delete/failure"
  )(),
  getTag: createAsyncAction(
    "tag/get/request",
    "tag/get/success",
    "tag/get/failure"
  )(),
};