import { combineReducers } from "redux";

import { User } from "./user";

const createRootReducer = () =>
  combineReducers({
    user: User.reducer,
  });

export default createRootReducer;
