import { combineReducers } from "redux";
import testReducer from "../../../features/testarea/testReducer";
import eventReducer from "../../../features/events/eventReducer";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import { reducer as toastReducer } from "react-redux-toastr";
import { reducer as FormReducer } from "redux-form";
import modalReducer from "../../../features/modals/modalReducer";
import authReducer from "../../../features/auth/authReducer";
import asyncReducer from "./../../../features/async/asyncReducer";

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  form: FormReducer,
  test: testReducer,
  events: eventReducer,
  modals: modalReducer,
  auth: authReducer,
  async: asyncReducer,
  toastr: toastReducer
});

export default rootReducer;
