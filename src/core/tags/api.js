import { client } from "../../helpers/api";
import apiRoutes from "../../helpers/apiRoutes";

function createTag(data) {
  return client.request({
    method: "post",
    url: apiRoutes.createTag(),
    data: { tag: data.tag }
  });
}

function getTags() {
  return client.request({
    method: "get",
    url: apiRoutes.getTags()
  });
}

function deleteTag(id) {
  return client.request({
    method: "delete",
    url: apiRoutes.deleteTag(id)
  })
}

function getTag(id) {
  return client.request({
    method: "get",
    url: apiRoutes.getTag(id)
  })
}

export const Api = {
  createTag,
  getTags,
  deleteTag,
  getTag,
};