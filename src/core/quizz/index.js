import { useDispatch, useSelector } from "react-redux";
import { rootSagas } from "./sagas";
import { Events } from "./actions";
import { quizzReducer } from "./reducer";
import { isLoading, questions } from "./selectors";

function useGetQuizz() {
  const dispatch = useDispatch();
  return () => {
    dispatch(Events.getQuizz());
  };
}

function useQuestions() {
  return useSelector(questions);
}

function useIsLoading() {
  return useSelector(isLoading);
}

export const Quizz = {
  getQuizz: useGetQuizz,
  questions: useQuestions,
  isLoading: useIsLoading,
  sagas: rootSagas,
  reducer: quizzReducer,
};
