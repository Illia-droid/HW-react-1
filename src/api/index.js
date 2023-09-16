import queryString from "query-string";
import { API } from "../constants";
/**
 *
 * @param {object} option
 * @param {number} option.results
 * @param {number} option.page
 * @returns {Promise}
 */
export const getUsers = (options = {}) => {
  const defaultOptions = {
    results: API.RESULTS,
    page: API.PAGE,
    seed: API.KEY,
    nat:API.NAT,
  };
  const readyOptions = { ...defaultOptions, ...options };

  return fetch(`${API.URL}?${queryString.stringify(readyOptions)}`).then(
    (response) => response.json()
  );
};
