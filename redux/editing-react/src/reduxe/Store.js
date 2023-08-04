import { combineReducers, compose, legacy_createStore } from "redux";

import changeServiceReducer from "../reduxe/changeServiceReducer";
import serviceListReducer from "../reduxe/serviceListReducer";

const ReactReduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

function configureService() {
  return legacy_createStore(
    combineReducers({
      changeService: changeServiceReducer,
      listService: serviceListReducer,
    }),
    undefined,
    compose(ReactReduxDevTools)
  );
}

export default configureService;