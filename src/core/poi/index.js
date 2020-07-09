import { useDispatch, useSelector } from "react-redux";
import { rootSagas } from "./sagas";
import { Events, Actions } from "./actions";
import { poiReducer } from "./reducer";
import { allPoi, isLoading, getAllPoiType, getPoi, history } from "./selectors";

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

function usePoiValidate() {
  const dispatch = useDispatch();
  return (id) => {
    dispatch(Events.poiValidate(id));
  };
}

function usePoiHistoric() {
  const dispatch = useDispatch();
  return () => {
    dispatch(Events.poiHistoric());
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

function useHistory() {
  return useSelector(history);
}

export const Poi = {
  registerPoi: useRegisterPoi,
  getPoi: useGetPoi,
  updatePoi: useUpdatePoi,
  deletePoi: useDeletePoi,
  getAllPoi: useGetAllPoi,
  poiValidate: usePoiValidate,
  poiHistoric: usePoiHistoric,
  history: useHistory,
  allPoi: useAllPoi,
  poi: usePoi,
  poiTypes: useGetAllPoiType,
  isLoading: useIsLoading,
  sagas: rootSagas,
  reducer: poiReducer,
};
