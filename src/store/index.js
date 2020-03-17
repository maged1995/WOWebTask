import { configureStore, isPlain, getDefaultMiddleware } from "redux-starter-kit";
import { Iterable } from "immutable";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router/immutable";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import { rootReducer } from "./reducers";
export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

export default function configureAppStore(preloadedState) {
  const isSerializable = value => Iterable.isIterable(value) || isPlain(value);
  const getEntries = value => (Iterable.isIterable(value) ? value.entries() : Object.entries(value));
  const store = configureStore({
    reducer: rootReducer(history),
    middleware: [
      sagaMiddleware,
      routerMiddleware(history),
      ...getDefaultMiddleware({ thunk: false, serializableCheck: { isSerializable, getEntries } }),
    ],
    preloadedState,
  });

  sagaMiddleware.run(rootSaga);

  if (process.env.NODE_ENV !== `production` && module.hot) {
    module.hot.accept(`./reducers`, () => store.replaceReducer(rootReducer));
  }

  return store;
}
