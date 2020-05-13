import { useDispatch, useSelector } from "react-redux";
import { rootSagas } from "./sagas";
import { Events, Actions } from "./actions";
import { tagsReducer } from "./reducer";
import { allTags, isLoading } from "./selectors";

function useCreateTag() {
  const dispatch = useDispatch();
  return (data) => {
    dispatch(Events.createTag(data));
    dispatch(Actions.createTag.request());
  };
}

function useGetTags() {
  const dispatch = useDispatch();
  return () => {
    dispatch(Events.getTags());
    dispatch(Actions.getTags.request());
  };
}

function useDeleteTag() {
  const dispatch = useDispatch();
  return (id) => {
    dispatch(Events.deleteTag(id));
    dispatch(Actions.deleteTag.request());
  };
}

function useGetTag() {
  const dispatch = useDispatch();
  return (id) => {
    dispatch(Events.getTag(id));
    dispatch(Actions.getTag.request());
  };
}

function useIsLoading() {
  return useSelector(isLoading);
}

function useAllTags() {
  return useSelector(allTags);
}


export const Tags = {
  createTag: useCreateTag,
  getTags: useGetTags,
  deleteTag: useDeleteTag,
  getTag: useGetTag,
  tags: useAllTags,
  isLoading: useIsLoading,
  sagas: rootSagas,
  reducer: tagsReducer
};