import { client } from "../../helpers/api";
import apiRoutes from "../../helpers/apiRoutes";

function registerCompany(data) {
  return client.request({
    method: "post",
    url: apiRoutes.registerCompany(),
    data: {
      name: data.name,
      type: data.type,
      address: data.address,
      city: data.city,
      long: data.lng.toString(),
      lat: data.lat.toString(),
      postalCode: data.postCode,
      nbWorker: data.nbWorker,
      beginDeal: data.beginDeal,
      endDeal: data.endDeal,
      domaineMail: data.domaineMail,
    }
  });
}

function getCompany(id) {
  return client.request({
    method: "get",
    url: apiRoutes.getCompany(id)
  });
}

function updateCompany(data) {
  return client.request({
    method: "put",
    url: apiRoutes.getProfile(data.id),
    data: {
      name: data.name,
      type: data.type,
      address: data.address,
      city: data.city,
      long: data.lng.toString(),
      lat: data.lat.toString(),
      postalCode: data.postCode,
      nbWorker: data.nbWorker,
      beginDeal: data.beginDeal,
      endDeal: data.endDeal,
      domaineMail: data.domaineMail,
    }
  });
}

function deleteCompany(id) {
  return client.request({
    method: "delete",
    url: apiRoutes.deleteCompany(id)
  })
}

function getAllCompanies() {
  return client.request({
    method: "get",
    url: apiRoutes.getAllCompanies()
  })
}

export const Api = {
  registerCompany,
  getCompany,
  updateCompany,
  deleteCompany,
  getAllCompanies,
};