import { CHANGE_SERVICE_FIELD, ID_ACTIVE } from "./action";

const initialState = { name: " ", price: "", idActive: null };

const changeServiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SERVICE_FIELD:
      if (action.payload.name === "clear form") {
        return initialState;
      }
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case ID_ACTIVE:
      return {
        ...state,
        idActive: action.payload.id,
      };
    default:
      return state;
  }
};

export default changeServiceReducer;