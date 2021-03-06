import { ActionType, getType } from "typesafe-actions";
import produce from "immer";
import { Actions } from "./actions";

const initialState: ChallengeState = {
  data: [],
  errors: [],
  isLoading: false,
};

export type ChallengeAction =
  | ActionType<typeof Actions.getChallenge>
  | ActionType<typeof Actions.challengeCurrent>
  | ActionType<typeof Actions.validateChallenge>;

export const knowItReducer = (state = initialState, action: ChallengeAction) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case getType(Actions.getChallenge.request):
        draft.isLoading = action.payload;
        break;
      case getType(Actions.getChallenge.success):
        draft.isLoading = false;
        draft.data = action.payload;
        draft.errors = [];
        break;
      case getType(Actions.getChallenge.failure):
        draft.isLoading = action.payload;
        break;
      case getType(Actions.addChallenge.request):
        draft.isLoading = true;
        break;
      case getType(Actions.addChallenge.success):
        draft.isLoading = false;
        // draft.data = action.payload;
        // draft.errors = [];
        break;
      case getType(Actions.addChallenge.failure):
        draft.isLoading = true;
        break;
      case getType(Actions.challengeCurrent.request):
        draft.isLoading = true;
        break;
      case getType(Actions.challengeCurrent.success):
        draft.isLoading = false;
        draft.data = action.payload;
        break;
      case getType(Actions.challengeCurrent.failure):
        draft.isLoading = false;
        break;
      case getType(Actions.validateChallenge.request):
        draft.isLoading = true;
        break;
      case getType(Actions.validateChallenge.success):
        draft.isLoading = false;
        break;
      case getType(Actions.validateChallenge.failure):
        draft.isLoading = false;
        break;
      default:
        return state;
    }
  });
};
