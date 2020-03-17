import { createReducer } from "redux-starter-kit";
import * as actions from "./actions";

const photos = createReducer(
  {
    entries: [],
    meta: {},
    loading: false,
  },
  {
    [actions.fetchPhotos.request]: state => ({
      ..state,
      loading: true,
    }),
    [actions.fetchPhotos.success]: (state, action) => ({
      loading: false,
      entries: action.payload.images,
      meta: action.payload.meta,
    }),
    [actions.fetchPhotos.failure]: () => ({
      loading: false,
    }),
  },
);

export default photos;
