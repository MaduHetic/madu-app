import { client } from "@helpers/api";
import apiRoutes from "@helpers/apiRoutes";

function getChallenge() {
  return client.request({
    method: "get",
    url: apiRoutes.challenge(),
  });
}

function addChallenge(data) {
  return client.request({
    method: "post",
    url: apiRoutes.challenge(),
    data: data
  });
}

export const Api = {
  getChallenge,
  addChallenge,
};
