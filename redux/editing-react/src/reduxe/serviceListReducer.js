import { nanoid } from "nanoid";
import { ADD_SERVICE, REMOVE_SERVICE } from "./action";

const initialState = [];

const serviceListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SERVICE:
      const { name, price } = action.payload;
      return [...state, { id: nanoid(), name: name, price: Number(price) }];
    case REMOVE_SERVICE:
      const { id } = action.payload;
      debugger;
      return state.filter((item) => item.id !== id);
    default:
      return state;
  }
};

export default serviceListReducer;