//rootreducer : its going to hold all reducer details at one place
import { combineReducers } from "redux";
import authReducer from "./authReducer";

const rootReducers = combineReducers({
  authReducer,
});

export default rootReducers;

