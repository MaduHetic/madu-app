
import { ActionType, getType } from "typesafe-actions";
import produce from "immer";
import { Actions } from "./actions";


const initialState = {
  stats: [],
  isLoading: false,
};

export type StatsAction =
  | ActionType<typeof Actions.getStats>

export const statsReducer = (
  state = initialState,
  action: StatsAction
) => {
  return produce(state, draft => {
    switch (action.type) {
      case getType(Actions.getStats.request):
        draft.isLoading = true;
        break;
      case getType(Actions.getStats.success):
        draft.stats = action.payload;
        draft.isLoading = false;
        break;
      case getType(Actions.getStats.failure):
        draft.isLoading = true;
        break;
      default:
        return state;
    }
  });
};