import axios, { AxiosResponse } from "axios";
import { put, takeEvery } from "redux-saga/effects";
import { getMovements, getMovementsRequest, getMovementsRequestSuccess, getMovementsRequestFailure } from "../reducers/movementReducer";
import {Movement} from "../reducers/EntityTypes";

function* getMovementsSaga() {
  try {
    yield put(getMovementsRequest());
    const response: AxiosResponse<Movement> = yield axios.get("http://localhost:8080/movements");
    yield put(getMovementsRequestSuccess(response.data));
  } catch (error) {
    console.error(error);
    yield put(getMovementsRequestFailure());
  }
}

export function* watchGetMovements() {
  yield takeEvery(getMovements, getMovementsSaga);
}
