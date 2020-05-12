export const user = (state) => state.user;
export const errors = (state) => user(state).errors;
export const headers = (state) => user(state).credentials;
export const isLoading = (state) => user(state).isLoading;
export const loggedIn = (state) => user(state).loggedIn;
