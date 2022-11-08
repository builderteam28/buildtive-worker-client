import { PROJECTWORKERS_FETCH_ALL, PROJECT_FETCH_ALL_INACTIVE, PROJECT_FETCH_ONE } from "../actions/actionTypes";

const initialState = {
  project: {},
  projects: [],
  jobs: [],
};

function projectReducer(state = initialState, action) {
  switch (action.type) {
    case PROJECT_FETCH_ALL_INACTIVE:
      return {
        ...state,
        projects: action.payload,
      };
    case PROJECTWORKERS_FETCH_ALL:
      return {
        ...state,
        jobs: action.payload,
      };
    case PROJECT_FETCH_ONE:
      return {
        ...state,
        project: action.payload,
      };
    default:
      return state;
  }
}

export default projectReducer;
