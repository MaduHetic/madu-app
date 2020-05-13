import { client } from "../../helpers/api";
import apiRoutes from "../../helpers/apiRoutes";

function signIn(data) {
  console.log("api", data);
  return client.request({
    method: "post",
    url: apiRoutes.signIn(),
    data,
  });
}

export const Api = {
  signIn,
};
