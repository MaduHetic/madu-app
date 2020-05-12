import { createAction, createAsyncAction } from "typesafe-actions";

export const Events = {
  registerCompany: createAction("company/register")(),
  getCompany: createAction("company/get")(),
  updateCompany: createAction("company/update")(),
  deleteCompany: createAction("company/delete")(),
  getAllCompanies: createAction("company/get/all")(),
};

export const Actions = {
  registerCompany: createAsyncAction(
    "company/register/request",
    "company/register/success",
    "company/register/failure"
  )(),
  getCompany: createAsyncAction(
    "company/get/request",
    "company/get/success",
    "company/get/failure"
  )(),
  updateCompany: createAsyncAction(
    "company/update/request",
    "company/update/success",
    "company/update/failure"
  )(),
  deleteCompany: createAsyncAction(
    "company/delete/request",
    "company/delete/success",
    "company/delete/failure"
  )(),
  getAllCompanies: createAsyncAction(
    "company/get/all/request",
    "company/get/all/success",
    "company/get/all/failure"
  )(),
};