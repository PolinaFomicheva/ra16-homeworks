import { createSlice } from "@reduxjs/toolkit";

const factsStarWarsSlice = createSlice({
  name: "facts",
  initialState: {
    arrFacts: [
      "прообразом Чубакки стал пёс режиссёра",
      "актёрам разрешили подобрать любимый цвет для своих световых мечей",
      "в фильме «Звёздные войны-V: Империя наносит ответный удар» среди космических объектов можно заметить парящий ботинок и картофелину",
      "дыхание Дарта Вейдера — это звуки дыхательной маски, подключённой к аквалангу",
      "планета Татуин названа в честь реального города в Тунисе — стране, где происходила часть съёмок",
    ],
    indexFacts: 0,
  },
  reducers: {
    enterFacts(state, action) {
      let index = Number(action.payload);
      if (index < 0) {
        index = 0;
      } else if (index > 5) {
        index = 5;
      }
      state.indexFacts = index;
    },
  },
});

export const { enterFacts } = factsStarWarsSlice.actions;

export default factsStarWarsSlice.reducer;