
import { ActionType, getType } from "typesafe-actions";
import produce from "immer";
import { Actions } from "./actions";


const initialState = {
  allPoi: [],
  poi: {},
  errors: [],
  isLoading: false,
};

export type PoiAction =
  | ActionType<typeof Actions.registerPoi>
  | ActionType<typeof Actions.getPoi>
  | ActionType<typeof Actions.updatePoi>
  | ActionType<typeof Actions.deletePoi>
  | ActionType<typeof Actions.getAllPoi>;

export const poiReducer = (
  state = initialState,
  action: PoiAction
) => {
  return produce(state, draft => {
    switch (action.type) {
      case getType(Actions.registerPoi.request):
        draft.isLoading = true;
        break;
      case getType(Actions.registerPoi.success):
        draft.isLoading = false;
        break;
      case getType(Actions.registerPoi.failure):
        draft.isLoading = true;
        break;
      case getType(Actions.getPoi.request):
        draft.isLoading = true;
        break;
      case getType(Actions.getPoi.success):
        draft.poi = action.payload;
        draft.isLoading = true;
        break;
      case getType(Actions.getPoi.failure):
        draft.isLoading = true;
        break;
      case getType(Actions.updatePoi.request):
        draft.isLoading = true;
        break;
      case getType(Actions.updatePoi.success):
        draft.isLoading = true;
        break;
      case getType(Actions.updatePoi.failure):
        draft.isLoading = true;
        break;
      case getType(Actions.deletePoi.request):
        draft.isLoading = true;
        break;
      case getType(Actions.deletePoi.success):
        draft.isLoading = true;
        break;
      case getType(Actions.deletePoi.failure):
        draft.isLoading = true;
        break;
      case getType(Actions.getAllPoi.request):
        draft.isLoading = true;
        break;
      case getType(Actions.getAllPoi.success):
        draft.allPoi = action.payload;
        draft.isLoading = true;
        break;
      case getType(Actions.getAllPoi.failure):
        draft.isLoading = true;
        break;
      default:
        return state;
    }
  });
};