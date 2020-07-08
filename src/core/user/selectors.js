export const user = (state) => state.user;
export const error = (state) => user(state).error;
export const headers = (state) => user(state).credentials;
export const isLoading = (state) => user(state).isLoading;
export const loggedIn = (state) => user(state).loggedIn;
export const firstName = (state) => user(state)?.user?.user?.firstName;
