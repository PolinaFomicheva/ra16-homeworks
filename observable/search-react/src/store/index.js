import { combineReducers } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import skillsReducer from "../slice/skilsSlice";
import { configureStore } from "@reduxjs/toolkit";
import { changeSearchEpic, searchSkillsEpic } from "../epics";

const reducer = combineReducers({
  skills: skillsReducer,
});

const epic = combineEpics(changeSearchEpic, searchSkillsEpic);

const epicMiddleware = createEpicMiddleware();

const store = configureStore({
  reducer,
  middleware: [epicMiddleware],
});

epicMiddleware.run(epic);

export default store;