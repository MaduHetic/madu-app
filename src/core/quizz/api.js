import { client } from "@helpers/api";
import apiRoutes from "@helpers/apiRoutes";

function getQuizz() {
  return client.request({
    method: "get",
    url: apiRoutes.quizz(),
  });
}

export const Api = {
  getQuizz,
};
