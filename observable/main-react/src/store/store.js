import { combineReducers } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import serviceReducer from "../slice/index";
import { configureStore } from "@reduxjs/toolkit";
import { serviceRequestEpic } from "../epics/index";

const reducer = combineReducers({
  service: serviceReducer,
});

const epic = combineEpics(serviceRequestEpic);

const epicMiddleware = createEpicMiddleware();

const store = configureStore({
  reducer,
  middleware: [epicMiddleware],
});

epicMiddleware.run(epic);

export default store;