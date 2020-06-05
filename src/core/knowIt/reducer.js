import { ActionType, getType } from "typesafe-actions";
import produce from "immer";
import { Actions } from "./actions";

const initialState: KnowItState = {
  data: [],
  errors: [],
  isLoading: false,
};

export type KnowItAction = ActionType<typeof Actions.getKnowIt>;

export const knowItReducer = (state = initialState, action: KnowItAction) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case getType(Actions.getKnowIt.request):
        draft.isLoading = action.payload;
        break;
      case getType(Actions.getKnowIt.success):
        draft.isLoading = false;
        draft.data = action.payload;
        draft.errors = [];
        break;
      case getType(Actions.getKnowIt.failure):
        draft.isLoading = action.payload;
        break;
      default:
        return state;
    }
  });
};
