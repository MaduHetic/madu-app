
import { ActionType, getType } from "typesafe-actions";
import produce from "immer";
import { Actions } from "./actions";


const initialState = {
  companies: [],
  company: {},
  errors: [],
  isLoading: false,
  filteredByType: [],
};

export type CompanyAction =
  | ActionType<typeof Actions.registerCompany>
  | ActionType<typeof Actions.getCompany>
  | ActionType<typeof Actions.updateCompany>
  | ActionType<typeof Actions.deleteCompany>
  | ActionType<typeof Actions.getAllCompanies>;

export const companyReducer = (
  state = initialState,
  action: CompanyAction
) => {
  return produce(state, draft => {
    switch (action.type) {
      case getType(Actions.registerCompany.request):
        draft.isLoading = true;
        break;
      case getType(Actions.registerCompany.success):
        draft.isLoading = false;
        break;
      case getType(Actions.registerCompany.failure):
        draft.isLoading = true;
        break;
      case getType(Actions.getCompany.request):
        draft.isLoading = true;
        break;
      case getType(Actions.getCompany.success):
        draft.company = action.payload;
        draft.isLoading = true;
        break;
      case getType(Actions.getCompany.failure):
        draft.isLoading = true;
        break;
      case getType(Actions.updateCompany.request):
        draft.isLoading = true;
        break;
      case getType(Actions.updateCompany.success):
        draft.isLoading = true;
        break;
      case getType(Actions.updateCompany.failure):
        draft.isLoading = true;
        break;
      case getType(Actions.deleteCompany.request):
        draft.isLoading = true;
        break;
      case getType(Actions.deleteCompany.success):
        draft.isLoading = true;
        break;
      case getType(Actions.deleteCompany.failure):
        draft.isLoading = true;
        break;
      case getType(Actions.getAllCompanies.request):
        draft.isLoading = true;
        break;
      case getType(Actions.getAllCompanies.success):
        draft.companies = action.payload;
        draft.isLoading = true;
        break;
      case getType(Actions.getAllCompanies.failure):
        draft.isLoading = true;
        break;
      default:
        return state;
    }
  });
};