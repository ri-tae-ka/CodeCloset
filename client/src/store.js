import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  createDesign,
  designReducer,
  singleDesignDetails,
} from "./reducers/DesignReducer";

const reducer = combineReducers({
  designs: designReducer,
  design: singleDesignDetails,
  newDesign: createDesign,
});

let initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
