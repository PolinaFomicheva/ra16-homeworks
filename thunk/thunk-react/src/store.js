import { configureStore } from "@reduxjs/toolkit";

import factsStarWarsReducer from "./slices/factsStarWars";
import photoContainierReducer from "./slices/photoContainier";

const store = configureStore({
  reducer: {
    facts: factsStarWarsReducer,
    photo: photoContainierReducer,
  },
});

export default store;