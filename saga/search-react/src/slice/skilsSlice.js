import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  loading: false,
  error: null,
  search: "",
};

const skilsSlice = createSlice({
  name: "skils",
  initialState,
  reducers: {
    changeSearchField(state, action) {
      state.search = action.payload;
    },
    searchSkillsRequest(state) {
      state.loading = true;
      state.error = null;
    },
    searchSkillsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    searchSkillsSuccess(state, action) {
      state.items = action.payload;
      state.loading = false;
      state.error = null;
    },
    resetSkills(state) {
      state.items = [];
      state.loading = false;
      state.error = null;
      state.search = "";
    },
  },
});

export const {
  resetSkills,
  changeSearchField,
  searchSkillsSuccess,
  searchSkillsFailure,
  searchSkillsRequest,
} = skilsSlice.actions;
export default skilsSlice.reducer;

