import { useDispatch, useSelector } from "react-redux";
import { rootSagas } from "./sagas";
import { Events, Actions } from "./actions";
import { statsReducer } from "./reducer";
import { allStats, isLoading } from "./selectors";

function useGetStats() {
  const dispatch = useDispatch();
  return () => {
    dispatch(Events.getStats());
    dispatch(Actions.getStats.request());
  };
}

function useIsLoading() {
  return useSelector(isLoading);
}

function useAllStats() {
  return useSelector(allStats);
}

export const Stats = {
  getStats: useGetStats,
  stats: useAllStats,
  isLoading: useIsLoading,
  sagas: rootSagas,
  reducer: statsReducer
};