import { createAction } from "redux-starter-kit";

export const asyncAction = type => ({
  request: createAction(`${type}/request`),
  success: createAction(`${type}/success`),
  failure: createAction(`${type}/failure`),
});
