import { takeLatest, put, spawn, debounce, retry } from "redux-saga/effects";
import {
  searchSkillsRequest,
  searchSkillsSuccess,
  searchSkillsFailure,
} from "../slice/skilsSlice";
import { searchSkills } from "../api/index";

// worker
function* handleChangeSearchSaga(action) {
  yield put(searchSkillsRequest(action.payload));
}

// watcher
function* watchChangeSearchSaga() {
  yield debounce(100, "skils/changeSearchField", handleChangeSearchSaga);
}

// worker
function* handleSearchSkillsSaga(action) {
  if (action.payload === "") {
    yield put(searchSkillsSuccess([]));
  } else {
    try {
      const retryCount = 3;
      const retryDelay = 1 * 1000; // ms
      const data = yield retry(
        retryCount,
        retryDelay,
        searchSkills,
        action.payload
      );
      yield put(searchSkillsSuccess(data));
    } catch (e) {
      yield put(searchSkillsFailure(e.message));
    }
  }
}

// watcher
function* watchSearchSkillsSaga() {
  yield takeLatest("skils/searchSkillsRequest", handleSearchSkillsSaga);
}

export default function* saga() {
  yield spawn(watchChangeSearchSaga);
  yield spawn(watchSearchSkillsSaga);
}
