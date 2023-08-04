import { createSlice } from "@reduxjs/toolkit";

const photoContaierSlice = createSlice({
  name: "photo",
  initialState: {
    arrPhoto: [],
  },
  reducers: {
    addPhoto(state, action) {
      state.arrPhoto = [...action.payload, ...state.arrPhoto];
    },
  },
});

export const { addPhoto } = photoContaierSlice.actions;

export default photoContaierSlice.reducer;