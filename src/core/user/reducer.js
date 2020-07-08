import { ActionType, getType } from "typesafe-actions";
import produce from "immer";
import { Actions } from "./actions";

const initialState: UserState = {
  loggedIn: false,
  error: null,
  isLoading: false,
};

export type UserAction =
  | ActionType<typeof Actions.signIn>
  | ActionType<typeof Actions.signUp>
  | ActionType<typeof Actions.signOut>;

export const userReducer = (state = initialState, action: UserAction) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case getType(Actions.signIn.request):
        draft.isLoading = action.payload;
        draft.error = null;
        break;
      case getType(Actions.signIn.success):
        draft.loggedIn = true;
        break;
      case getType(Actions.signIn.failure):
        draft.error = action.payload;
        draft.isLoading = false;
        break;
      case getType(Actions.signUp.request):
        draft.isLoading = action.payload;
        draft.error = null;
        break;
      case getType(Actions.signUp.success):
        draft.isLoading = action.payload;
        break;
      case getType(Actions.signUp.failure):
        draft.error = action.payload;
        draft.isLoading = false;
        break;
      case getType(Actions.signOut):
        draft.isLoading = false;
        draft.loggedIn = false;
        break;
      case getType(Actions.getCurrentUser.request):
        draft.isLoading = action.payload;
        break;
      case getType(Actions.getCurrentUser.success):
        draft.isLoading = false;
        draft.user = action.payload;
        draft.loggedIn = true;
        break;
      case getType(Actions.getCurrentUser.failure):
        draft.isLoading = false;
        break;
      default:
        return state;
    }
  });
};
