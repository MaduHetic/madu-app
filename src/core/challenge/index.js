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

function useData() {
  return useSelector(data);
}

function useIsLoading() {
  return useSelector(isLoading);
}

export const Challenge = {
  getChallenge: useGetChallenge,
  addChallenge: useAddChallenge,
  data: useData,
  isLoading: useIsLoading,
  sagas: rootSagas,
  reducer: knowItReducer,
};
