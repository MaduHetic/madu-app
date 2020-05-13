import { client } from "../../helpers/api";
import apiRoutes from "../../helpers/apiRoutes";

function getStats() {
  return client.request({
    method: "get",
    url: apiRoutes.getStats()
  });
}

export const Api = {
  getStats
};