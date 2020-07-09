import { client } from "@helpers/api";
import apiRoutes from "@helpers/apiRoutes";

function signIn(data) {
  return client.request({
    method: "post",
    url: apiRoutes.signIn(),
    data,
  });
}

function signUp(data) {
  return client.request({
    method: "post",
    url: apiRoutes.signUp(),
    data,
  });
}

function getCurrentUser() {
  return client.request({
    method: "get",
    url: apiRoutes.getProfile(),
  });
}

export const Api = {
  signIn,
  signUp,
  getCurrentUser,
};
