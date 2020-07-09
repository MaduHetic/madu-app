import { useDispatch, useSelector } from "react-redux";
import { rootSagas } from "./sagas";
import { Events } from "./actions";
import { knowItReducer } from "./reducer";
import { isLoading, data } from "./selectors";

function useGetChallenge() {
  const dispatch = useDispatch();
  return () => dispatch(Events.getChallenge());
}

function useAddChallenge() {
  const dispatch = useDispatch();
  return (data) => dispatch(Events.addChallenge(data));
}

function useChallengeCurrent() {
  const dispatch = useDispatch();
  return () => dispatch(Events.challengeCurrent());
}

function useValidateChallenge() {
  const dispatch = useDispatch();
  return (id) => dispatch(Events.validateChallenge(id));
}

function useData() {
  return useSelector(data);
}

function useIsLoading() {
  return useSelector(isLoading);
}

export const Challenge = {
  getChallenge: useGetChallenge,
  addChallenge: useAddChallenge,
  getChallengeCurrent: useChallengeCurrent,
  validateChallenge: useValidateChallenge,
  data: useData,
  isLoading: useIsLoading,
  sagas: rootSagas,
  reducer: knowItReducer,
};
