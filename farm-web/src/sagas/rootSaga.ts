import { all, fork } from "redux-saga/effects";
import { watchGetMovements } from "./movementSaga";
import { watchDoLogin, watchDoSignup } from "./loginSaga";

const rootSaga = function* () {
  yield all([fork(watchGetMovements), fork(watchDoLogin), fork(watchDoSignup)]);
};

export default rootSaga;
