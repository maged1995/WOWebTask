import { combineReducers } from "redux-starter-kit";
import routerReducer from "./router/reducer";

export const rootReducer = history =>
  combineReducers({
    router: routerReducer(history),
  });
