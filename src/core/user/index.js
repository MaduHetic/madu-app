import { useDispatch, useSelector } from "react-redux";
import { rootSagas } from "./sagas";
import { Events, Actions } from "./actions";
import { userReducer } from "./reducer";
import { isLoading, user, errors, loggedIn } from "./selectors";
import { removeCredsFromStorage } from "../../middlewares/saveCredentials";

function useSignIn() {
  const dispatch = useDispatch();
  return (creds) => dispatch(Events.signIn(creds));
}

export const User = {
  signIn: useSignIn,
  sagas: rootSagas,
  reducer: userReducer,
};
