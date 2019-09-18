import React, { useReducer } from "react";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
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

const AuthState = props => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthentificated: null,
    user: null,
    loading: true,
    error: null
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  //Load User

  //Register User

  //Login User

  //Logout User

  //Clear Errors

  return (
    <AuthContext.Provider
      value={{
        ...state
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
