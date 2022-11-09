import { PROFILE_FETCH, SET_ACCESS_TOKEN, SET_LOCATION, SET_USERNAME } from '../actions/actionTypes';

const initialState = {
  username: '',
  location: '',
  profile: {},
  accessToken: ''
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USERNAME: {
      return {
        ...state,
        username: action.payload,
      };
    }
    case SET_LOCATION: {
      return {
        ...state,
        location: action.payload,
      };
    }
    case PROFILE_FETCH: {
      return {
        ...state,
        profile: action.payload,
      };
    }
    case SET_ACCESS_TOKEN: {
      return {
        ...state,
        accessToken: action.payload,
      };
    }
    default:
      return state;
  }
}

export default userReducer;
