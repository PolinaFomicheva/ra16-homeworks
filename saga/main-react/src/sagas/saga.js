import { takeLatest, put, spawn, call } from "redux-saga/effects";
import { serviceSuccess, serviceDetails, serviceFailure } from "../slice/index";
import { request } from "../api/index";

// worker
function* serviceRequestSaga(action) {
  try {
    debugger;
    const data = yield call(request, action.payload);
    if (Array.isArray(data)) {
      yield put(serviceSuccess(data));
    } else {
      yield put(serviceDetails(data));
    }
  } catch (e) {
    yield put(serviceFailure(e.message));
  }
}

// watcher
function* watchserviceRequestSaga() {
  yield takeLatest("service/serviceRequest", serviceRequestSaga);
}

export default function* saga() {
  yield spawn(watchserviceRequestSaga);
}
