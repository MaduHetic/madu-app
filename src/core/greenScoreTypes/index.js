import { useDispatch, useSelector } from "react-redux";
import { rootSagas } from "./sagas";
import { Events, Actions } from "./actions";
import { greenScoreTypeReducer } from "./reducer";
import { allGreenScoreTypes, isLoading } from "./selectors";

function useCreateGreenScoreType() {
  const dispatch = useDispatch();
  return (data) => {
    dispatch(Events.createGreenScoreType(data));
    dispatch(Actions.createGreenScoreType.request());
  };
}

function useGetGreenScoreTypes() {
  const dispatch = useDispatch();
  return () => {
    dispatch(Events.getGreenScoreTypes());
    dispatch(Actions.getGreenScoreTypes.request());
  };
}

function useDeleteGreenScoreType() {
  const dispatch = useDispatch();
  return (id) => {
    dispatch(Events.deleteGreenScoreType(id));
    dispatch(Actions.deleteGreenScoreType.request());
  };
}

function useGetGreenScoreType() {
  const dispatch = useDispatch();
  return (id) => {
    dispatch(Events.getGreenScoreType(id));
    dispatch(Actions.getGreenScoreType.request());
  };
}

function useIsLoading() {
  return useSelector(isLoading);
}

function useAllGreenScoreTypes() {
  return useSelector(allGreenScoreTypes);
}


export const GreenScoreTypes = {
  createGreenScoreType: useCreateGreenScoreType,
  getGreenScoreTypes: useGetGreenScoreTypes,
  deleteGreenScoreType: useDeleteGreenScoreType,
  getGreenScoreType: useGetGreenScoreType,
  AllGreenScoreTypes: useAllGreenScoreTypes,
  isLoading: useIsLoading,
  sagas: rootSagas,
  reducer: greenScoreTypeReducer
};