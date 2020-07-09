import { ActionType, getType } from "typesafe-actions";
import produce from "immer";
import { Actions } from "./actions";

const initialState: QuizzState = {
  themes: [],
  questions: [],
  errors: [],
  isLoading: false,
  quizzResponse: null,
};

export type QuizzAction =
  | ActionType<typeof Actions.getQuizz>
  | ActionType<typeof Actions.getThemes>
  | ActionType<typeof Actions.sendQuizzForm>;

export const quizzReducer = (state = initialState, action: QuizzAction) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case getType(Actions.getQuizz.request): {
        draft.isLoading = action.payload;
        break;
      }
      case getType(Actions.getQuizz.success):
        draft.isLoading = false;
        draft.questions = action.payload;
        draft.errors = [];
        break;
      case getType(Actions.getQuizz.failure):
        draft.isLoading = action.payload;
        break;
      case getType(Actions.getThemes.request): {
        draft.isLoading = action.payload;
        break;
      }
      case getType(Actions.getThemes.success):
        draft.isLoading = false;
        draft.themes = action.payload;
        draft.errors = [];
        break;
      case getType(Actions.getThemes.failure):
        draft.isLoading = action.payload;
        break;
      case getType(Actions.sendQuizzForm.request):
        draft.isLoading = true;
        draft.quizzResponse = null;
        break;
      case getType(Actions.sendQuizzForm.success):
        draft.isLoading = false;
        draft.quizzResponse = action.payload;
        break;
      case getType(Actions.sendQuizzForm.failure):
        draft.isLoading = false;
        draft.quizzResponse = null;
        break;
      case getType(Actions.clearQuizzResponse):
        draft.quizzResponse = null;
        break;
      default:
        return state;
    }
  });
};
