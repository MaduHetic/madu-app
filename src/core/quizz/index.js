import { useDispatch, useSelector } from "react-redux";
import { rootSagas } from "./sagas";
import { Events, Actions } from "./actions";
import { quizzReducer } from "./reducer";
import { isLoading, questions, themes, quizzResponse } from "./selectors";

function useGetQuizz() {
  const dispatch = useDispatch();
  return (id) => {
    dispatch(Events.getQuizz(id));
  };
}

function useGetThemes() {
  const dispatch = useDispatch();
  return () => {
    dispatch(Events.getThemes());
  };
}

function useSendQuizz() {
  const dispatch = useDispatch();
  return (data) => {
    dispatch(Events.sendQuizzForm(data));
  };
}
function useClearQuizzResponse() {
  const dispatch = useDispatch();
  return () => {
    dispatch(Actions.clearQuizzResponse());
  };
}

function useQuizzResponse() {
  return useSelector(quizzResponse);
}

function useQuestions() {
  return useSelector(questions);
}

function useThemes() {
  return useSelector(themes);
}

function useIsLoading() {
  return useSelector(isLoading);
}

export const Quizz = {
  getQuizz: useGetQuizz,
  getThemes: useGetThemes,
  sendQuizzForm: useSendQuizz,
  quizzResponse: useQuizzResponse,
  questions: useQuestions,
  themes: useThemes,
  isLoading: useIsLoading,
  sagas: rootSagas,
  reducer: quizzReducer,
};
