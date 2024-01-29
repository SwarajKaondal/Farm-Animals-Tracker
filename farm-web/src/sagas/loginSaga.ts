import axios, { AxiosResponse } from "axios";
import { put, takeEvery } from "redux-saga/effects";
import {
  doLogin,
  loginRequest,
  loginRequestSuccess,
  loginRequestFailure,
  doSignup,
  signupRequest,
  signupRequestSuccess,
  signupRequestFailure,
} from "../reducers/loginReducer";

function* attemptLoginSaga(action: any) {
  try {
    const loginCredentials = { email: action.payload.email, password: action.payload.password };
    console.log(loginCredentials);
    yield put(loginRequest(loginCredentials));
    const response: AxiosResponse<any> = yield axios.get("http://localhost:8080/login", { params: loginCredentials });

    if (response.data.isValid) {
      yield put(loginRequestSuccess(response.data.name));
    } else {
      yield put(loginRequestFailure(response.data.error));
    }
  } catch (error) {
    console.log(error);
    yield put(loginRequestFailure("Error while logging in"));
  }
}

function* attemptSignupSaga(action: any) {
  try {
    yield put(signupRequest({ name: action.payload.name, email: action.payload.email, password: action.payload.password }));
    const response: AxiosResponse<any> = yield axios.get("http://localhost:8080/signup", {
      params: { name: action.payload.name, email: action.payload.email, password: action.payload.password },
    });

    if (response.data.isValid) {
      yield put(signupRequestSuccess());
    } else {
      yield put(signupRequestFailure(response.data.error));
    }
  } catch (error) {
    console.log(error);
    yield put(signupRequestFailure("Error while signing in"));
  }
}

export function* watchDoLogin() {
  yield takeEvery(doLogin, attemptLoginSaga);
}

export function* watchDoSignup() {
  yield takeEvery(doSignup, attemptSignupSaga);
}
