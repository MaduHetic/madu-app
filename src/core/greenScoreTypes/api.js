import { client } from "../../helpers/api";
import apiRoutes from "../../helpers/apiRoutes";

function createGreenScoreType(data) {
  return client.request({
    method: "post",
    url: apiRoutes.createGreenScoreType(),
    data: { typeGreenScore: data.typeGreenScore }
  });
}

function getGreenScoreTypes() {
  return client.request({
    method: "get",
    url: apiRoutes.getGreenScoreTypes()
  });
}

function deleteGreenScoreType(id) {
  return client.request({
    method: "delete",
    url: apiRoutes.deleteGreenScoreType(id)
  })
}

function getGreenScoreType(id) {
  return client.request({
    method: "get",
    url: apiRoutes.getGreenScoreType(id)
  })
}

export const Api = {
  createGreenScoreType,
  getGreenScoreTypes,
  deleteGreenScoreType,
  getGreenScoreType,
};