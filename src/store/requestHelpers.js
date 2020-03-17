import { loadFromLocalStorage } from "../localStorageHelpers";
import axios from "axios";
import { trackPromise } from "react-promise-tracker";
export const request = (customConfig = {}, area) => {
  const { authenticated, isDownloading = false, ...modifiedCustomConfig } = customConfig;
  const config = {
    headers: {},
    ...modifiedCustomConfig,
  };

  axios.interceptors.response.use(
    response => response,

    error => {
      const newError = error;
      if (typeof error.response.data === `string` || error.response.data === null)
        newError.response = { ...error.response, data: [`Something wrong has happened, please try again later`] };
      return Promise.reject(newError);
    },
  );

  if (authenticated) {
    const authHeaders = loadFromLocalStorage(`authHeaders`);
    if (!authHeaders) {
      const error = new Error(`Missing authentication headers`);
      throw error;
    }

    config.headers = {
      ...config.headers,
      ...authHeaders,
    };
  }

  return trackPromise(
    axios({
      baseURL: "http://localhost:3000",
      responseType: isDownloading ? `blob` : `json`,
      ...config,
    }),
    area,
  );
};
