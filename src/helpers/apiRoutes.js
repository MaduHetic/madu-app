export default {
  signIn: () => `/auth/login`, // POST
  signUp: () => `/user`, // POST
  signOut: () => `/auth/sign_out`,
  getProfile: () => `/profile`, // GET
  registerCompany: () => `/company`, // POST
  getCompany: (id) => `/company/one/${id}`, // GET
  updateCompany: (id) => `company/${id}`, // PUT
  deleteCompany: (id) => `company/${id}`, // DELETE
  getAllCompanies: () => `/company`, // GET
  registerPoi: () => `/poi`, // POST
  getPoi: (id) => `/poi/one/${id}`, // GET
  updatePoi: (id) => `poi/${id}`, // PUT
  deletePoi: (id) => `poi/${id}`, // DELETE
  getAllPoi: () => `/poi`, // GET
  getTag: (id) => `/tags/one/${id}`, // GET
  createTag: () => `/tags`, // POST
  deleteTag: (id) => `/tags/${id}`, // DELETE
  getTags: () => `/tags`, // GET
  getGreenScoreType: (id) => `/type-green-score/one/${id}`, // GET
  createGreenScoreType: () => `/type-green-score`, // POST
  deleteGreenScoreType: (id) => `/type-green-score/${id}`, // DELETE
  getGreenScoreTypes: () => `/type-green-score`, // GET
  getStats: () => `/stats`,
  knowIt: () => `/know-it`,
};
