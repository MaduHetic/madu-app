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
    data: data,
  });
}

function challengeCurrent() {
  return client.request({
    method: "get",
    url: apiRoutes.challengeCurrent(),
  });
}

function validateChallenge(id) {
  return client.request({
    method: "put",
    url: apiRoutes.validateChallenge(id),
  });
}

export const Api = {
  getChallenge,
  addChallenge,
  challengeCurrent,
  validateChallenge,
};
