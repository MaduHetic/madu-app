import { useDispatch, useSelector } from "react-redux";
import { rootSagas } from "./sagas";
import { Events, Actions } from "./actions";
import { poiReducer } from "./reducer";
import { allPoi, isLoading, getAllPoiType, getPoi } from "./selectors";

function useRegisterPoi() {
  const dispatch = useDispatch();
  return (data) => {
    dispatch(Actions.registerPoi.request(true));
    dispatch(Events.registerPoi(data));
  };
}

function useGetPoi() {
  const dispatch = useDispatch();
  return (id) => {
    dispatch(Events.getPoi(id));
    dispatch(Actions.getPoi.request());
  };
}

function useUpdatePoi() {
  const dispatch = useDispatch();
  return (data) => {
    dispatch(Events.updatePoi(data));
    dispatch(Actions.updatePoi.request());
  };
}

function useDeletePoi() {
  const dispatch = useDispatch();
  return (id) => {
    dispatch(Events.deletePoi(id));
    dispatch(Actions.deletePoi.request());
  };
}

function useGetAllPoi() {
  const dispatch = useDispatch();
  return () => {
    dispatch(Actions.getAllPoi.request());
    dispatch(Events.getAllPoi());
  };
}

function useIsLoading() {
  return useSelector(isLoading);
}

function useAllPoi() {
  return useSelector(allPoi);
}

function useGetAllPoiType() {
  return useSelector(getAllPoiType);
}

function usePoi() {
  return useSelector(getPoi);
}

export const Poi = {
  registerPoi: useRegisterPoi,
  getPoi: useGetPoi,
  updatePoi: useUpdatePoi,
  deletePoi: useDeletePoi,
  getAllPoi: useGetAllPoi,
  allPoi: useAllPoi,
  poi: usePoi,
  poiTypes: useGetAllPoiType,
  isLoading: useIsLoading,
  sagas: rootSagas,
  reducer: poiReducer
};