import { createSlice } from "@reduxjs/toolkit";
import ClipLoader from "react-spinners/ClipLoader";

const initialState = {
  items: [],
  details: null,
  loading: false,
  error: null,
};

const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {
    serviceRequest(state) {
      state.loading = (
        <ClipLoader
          cssOverride={{
            display: "block",
            margin: "0 auto",
            borderWidth: "10px",
          }}
          size={50}
          color="rgb(145, 84, 84)"
        />
      );
      state.error = null;
    },
    serviceFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    serviceSuccess(state, action) {
      state.items = action.payload;
      state.loading = false;
      state.error = null;
    },
    serviceDetails(state, action) {
      state.details = action.payload;
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  serviceSuccess,
  serviceFailure,
  serviceRequest,
  serviceDetails,
} = serviceSlice.actions;
export default serviceSlice.reducer;