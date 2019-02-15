import { combineReducers } from "redux";
import testReducer from "../../../testarea/testReducer";
import eventReducer from "../../../features/events/eventReducer";
import { reducer as FormReducer } from "redux-form";

const rootReducer = combineReducers({
  form: FormReducer,
  test: testReducer,
  events: eventReducer
});

export default rootReducer;
