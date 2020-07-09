import { useDispatch, useSelector } from "react-redux";
import { rootSagas } from "./sagas";
import { Events, Actions } from "./actions";
import { userReducer } from "./reducer";
import { isLoading, user, error, loggedIn, firstName } from "./selectors";
import { removeCredsFromStorage } from "../../middlewares/saveCredentials";

function useSignOut() {
  const dispatch = useDispatch();
  return () => {
    removeCredsFromStorage();
    dispatch(Actions.signOut());
  };
}

function useSignIn() {
  const dispatch = useDispatch();
  return (username, password) =>
    dispatch(
      Events.signIn({
        username,
        password,
      }),
    );
}

function useGetCurrentUser() {
  const dispatch = useDispatch();
  return () => {
    dispatch(Events.getCurrentUser());
  };
}

function useSignUp() {
  const dispatch = useDispatch();
  return (firstName, lastName, username, password) =>
    dispatch(
      Events.signUp({
        firstName,
        lastName,
        username,
        password,
      }),
    );
}

function useClearError() {
  const dispatch = useDispatch();
  return () => {
    dispatch(Actions.clearError());
  };
}

function useFirstName() {
  return useSelector(firstName);
}

function useUser() {
  return useSelector(user);
}

function useError() {
  return useSelector(error);
}

function useLoggedIn() {
  return useSelector(loggedIn);
}

function useIsLoading() {
  return useSelector(isLoading);
}

export const User = {
  signOut: useSignOut,
  signIn: useSignIn,
  signUp: useSignUp,
  firstName: useFirstName,
  user: useUser,
  errors: useError,
  loggedIn: useLoggedIn,
  isLoading: useIsLoading,
  getCurrentUser: useGetCurrentUser,
  clearError: useClearError,
  sagas: rootSagas,
  reducer: userReducer,
};
