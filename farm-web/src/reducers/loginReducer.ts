import { createSlice } from "@reduxjs/toolkit";

export type loginObj = {
  email: string;
  password: string;
  name: string;
  loading: boolean;
  loginError: string;
  signupError: string;
  loggedIn: boolean;
};

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    email: "",
    password: "",
    name: "",
    loading: false,
    loginError: "",
    signupError: "",
    loggedIn: false,
  },
  reducers: {
    doLogin: (state, action) => {},
    loginRequest: (state, action: { payload: { email: string; password: string } }) => {
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
        loading: true,
        loginError: "",
        loggedIn: false,
      };
    },
    loginRequestSuccess: (state, action) => {
      return { ...state, name: action.payload.name, loading: false, loginError: "", loggedIn: true };
    },
    loginRequestFailure: (state, action) => {
      return { ...state, loading: false, loginError: action.payload, loggedIn: false };
    },
    logout: (state) => {
      return { ...state, loggedIn: false };
    },
    doSignup: (state, action) => {},
    signupRequest: (state, action: { payload: { name: string; email: string; password: string } }) => {
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        password: action.payload.password,
        loading: true,
        signupError: "",
        loggedIn: false,
      };
    },
    signupRequestSuccess: (state) => {
      return { ...state, loading: false, signupError: "", loggedIn: true };
    },
    signupRequestFailure: (state, action) => {
      return { ...state, loading: false, signupError: action.payload, loggedIn: false };
    },
  },
});

export const {
  doLogin,
  loginRequest,
  loginRequestSuccess,
  loginRequestFailure,
  logout,
  doSignup,
  signupRequest,
  signupRequestSuccess,
  signupRequestFailure,
} = loginSlice.actions;

export default loginSlice.reducer;
