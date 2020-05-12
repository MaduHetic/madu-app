
import { ActionType, getType } from "typesafe-actions";
import produce from "immer";
import { Actions } from "./actions";


const initialState = {
  tag: {},
  tags: [],
  isLoading: false,
};

export type TagsAction =
  | ActionType<typeof Actions.createTag>
  | ActionType<typeof Actions.getTags>
  | ActionType<typeof Actions.deleteTag>
  | ActionType<typeof Actions.getTag>;

export const tagsReducer = (
  state = initialState,
  action: TagsAction
) => {
  return produce(state, draft => {
    switch (action.type) {
      case getType(Actions.createTag.request):
        draft.isLoading = true;
        break;
      case getType(Actions.createTag.success):
        draft.tags = [...draft.tags, action.payload]
        draft.isLoading = false;
        break;
      case getType(Actions.createTag.failure):
        draft.isLoading = false;
        break;
      case getType(Actions.getTags.request):
        draft.isLoading = true;
        break;
      case getType(Actions.getTags.success):
        draft.tags = action.payload;
        draft.isLoading = false;
        break;
      case getType(Actions.getTags.failure):
        draft.isLoading = true;
        break;
      case getType(Actions.deleteTag.request):
        draft.isLoading = true;
        break;
      case getType(Actions.deleteTag.success):
        draft.isLoading = false;
        break;
      case getType(Actions.deleteTag.failure):
        draft.isLoading = true;
        break;
      case getType(Actions.getTag.request):
        draft.isLoading = true;
        break;
      case getType(Actions.getTag.success):
        draft.tag = action.payload;
        draft.isLoading = true;
        break;
      case getType(Actions.getTag.failure):
        draft.isLoading = true;
        break;
      default:
        return state;
    }
  });
};