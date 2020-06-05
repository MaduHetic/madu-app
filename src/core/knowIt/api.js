import { client } from "@helpers/api";
import apiRoutes from "@helpers/apiRoutes";

function getKnowIt() {
  return client.request({
    method: "get",
    url: apiRoutes.knowIt(),
  });
}

export const Api = {
  getKnowIt,
};
