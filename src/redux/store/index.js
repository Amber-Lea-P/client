import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {};
const middleware = [thunk];
const store = createStore(initialState, composeWithDevTools(applyMiddleware(...middleware)));

//Three requirements:
// root reducer : index.js from reducer folder will hold details about your all reducers
// app initial state : {}
// middleware/thunk : 
// createStore: it is the method which helps us to create the store for our react redux application

export default store;