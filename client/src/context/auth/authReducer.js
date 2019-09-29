import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthentificated: true,
        isAuthentificated: true,
        loading: false,
        user: action.payload
      };
    case REGISTER_SUCCESS:
      localStorage.setItem("contactKeeperToken", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthentificated: true,
        loading: false
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("contactKeeperToken", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthentificated: true,
        loading: false
      };
    case AUTH_ERROR:
    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem("contactKeeperToken");
      return {
        ...state,
        token: null,
        isAuthentificated: false,
        user: null,
        loading: false,
        error: action.payload
      };
    case CLEAR_ERRORS:
      return { ...state, error: null };
    default:
      return state;
  }
};
