
import { ActionType, getType } from "typesafe-actions";
import produce from "immer";
import { Actions } from "./actions";


const initialState = {
  greenScoreType: {},
  greenScoreTypes: [],
  isLoading: false,
};

export type GreenScoreTypeAction =
  | ActionType<typeof Actions.createGreenScoreType>
  | ActionType<typeof Actions.getGreenScoreTypes>
  | ActionType<typeof Actions.deleteGreenScoreType>
  | ActionType<typeof Actions.getGreenScoreType>;

export const greenScoreTypeReducer = (
  state = initialState,
  action: GreenScoreTypeAction
) => {
  return produce(state, draft => {
    switch (action.type) {
      case getType(Actions.createGreenScoreType.request):
        draft.isLoading = true;
        break;
      case getType(Actions.createGreenScoreType.success):
        draft.greenScoreTypes = [...draft.greenScoreTypes, action.payload];
        draft.isLoading = false;
        break;
      case getType(Actions.createGreenScoreType.failure):
        draft.isLoading = false;
        break;
      case getType(Actions.getGreenScoreTypes.request):
        draft.isLoading = true;
        break;
      case getType(Actions.getGreenScoreTypes.success):
        draft.greenScoreTypes = action.payload;
        draft.isLoading = false;
        break;
      case getType(Actions.getGreenScoreTypes.failure):
        draft.isLoading = true;
        break;
      case getType(Actions.deleteGreenScoreType.request):
        draft.isLoading = true;
        break;
      case getType(Actions.deleteGreenScoreType.success):
        draft.isLoading = false;
        break;
      case getType(Actions.deleteGreenScoreType.failure):
        draft.isLoading = true;
        break;
      case getType(Actions.getGreenScoreType.request):
        draft.isLoading = true;
        break;
      case getType(Actions.getGreenScoreType.success):
        draft.greenScoreType = action.payload;
        draft.isLoading = true;
        break;
      case getType(Actions.getGreenScoreType.failure):
        draft.isLoading = true;
        break;
      default:
        return state;
    }
  });
};