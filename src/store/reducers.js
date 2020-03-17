import { combineReducers } from "redux-starter-kit";
// import routerReducer from "./router/reducer";
import photosReducer from "./photos/reducer";

export const rootReducer = history =>
  combineReducers({
    photosReducer,
    // router: routerReducer(history),
  });
