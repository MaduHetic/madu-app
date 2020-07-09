import { client } from "../../helpers/api";
import apiRoutes from "../../helpers/apiRoutes";

function registerPoi(data) {
  return client.request({
    method: "post",
    url: apiRoutes.registerPoi(),
    data: {
      name: data.name,
      address: data.address,
      city: data.city,
      description: data.description,
      lat: data.lat.toString(),
      long: data.lng.toString(),
      postalCode: data.postCode,
      tags: data.tags,
      typeGreenScore: data.typeGreenScore,
      type: data.type,
      price: data.price,
    },
  });
}

function getPoi(id) {
  return client.request({
    method: "get",
    url: apiRoutes.getPoi(id),
  });
}

function updatePoi(data) {
  return client.request({
    method: "put",
    url: apiRoutes.getProfile(data.id),
    data: {
      name: data.name,
      address: data.address,
      city: data.city,
      description: data.description,
      lat: data.lat.toString(),
      long: data.lng.toString(),
      postalCode: data.postCode,
      tags: data.tags,
      typeGreenScore: data.typeGreenScore, // [{ id: 'string', percent: 'numberString' }]
      type: data.type,
      price: data.price,
    },
  });
}

function deletePoi(id) {
  return client.request({
    method: "delete",
    url: apiRoutes.deletePoi(id),
  });
}

function getAllPoi() {
  return client.request({
    method: "get",
    url: apiRoutes.getAllPoi(),
  });
}

export const Api = {
  registerPoi,
  getPoi,
  updatePoi,
  deletePoi,
  getAllPoi,
};
