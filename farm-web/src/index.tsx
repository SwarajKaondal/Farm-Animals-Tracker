import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import rootReducer from "./reducers/rootReducer";
import rootSaga from "./sagas/rootSaga";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import createSagaMiddleware from "@redux-saga/core";
import logger from "redux-logger";
import { Router } from "./components/Route";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({ reducer: rootReducer, middleware: [sagaMiddleware, logger] });
sagaMiddleware.run(rootSaga);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
