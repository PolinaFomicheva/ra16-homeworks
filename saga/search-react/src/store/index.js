import { combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import skillsReducer from "../slice/skilsSlice";
import { configureStore } from "@reduxjs/toolkit";
import saga from "../sagas";

const reducer = combineReducers({
  skills: skillsReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(saga);

export default store;
