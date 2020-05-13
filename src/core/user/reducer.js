import { ActionType, getType } from "typesafe-actions";
import produce from "immer";
import { Actions } from "./actions";

const initialState: UserState = {
  loggedIn: false,
  errors: [],
  isLoading: false,
};

export type UserAction = ActionType<typeof Actions.signIn>;

export const userReducer = (state = initialState, action: UserAction) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case getType(Actions.signIn.request):
        draft.isLoading = action.payload;
        break;
      case getType(Actions.signIn.success):
        draft.isLoading = false;
        draft.loggedIn = true;
        draft.errors = [];
        break;
      case getType(Actions.signIn.failure):
        draft.isLoading = action.payload;
        break;
      default:
        return state;
    }
  });
};
