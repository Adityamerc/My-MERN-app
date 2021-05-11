import { AUTHORIZED, UN_AUTHORIZED } from "../actions/action";

function reducer(state = [], action) {
  switch (action.type) {
    case AUTHORIZED:
      return {
        ...state,
        Message: "Success",
      };
    case UN_AUTHORIZED:
      return {
        ...state,
        Message: "Failed",
      };

    default:
      return state;
  }
}

export default reducer;
