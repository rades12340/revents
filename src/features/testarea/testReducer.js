import { createReducer } from "../../app/common/util/ReducerUtil";
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./TestConstants";

const initialState = {
  data: 42
};

export const incrementCounter = (state, payload) => {
  return {
    ...state,
    data: state.data + 1
  };
};

export const decremenCounter = (state, payload) => {
  return {
    ...state,
    data: state.data - 1
  };
};

// const testReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case INCREMENT_COUNTER:

//     case DECREMENT_COUNTER:

//     default:
//       return state;
//   }
// };

export default createReducer(initialState, {
  [INCREMENT_COUNTER]: incrementCounter,
  [DECREMENT_COUNTER]: decremenCounter
});
