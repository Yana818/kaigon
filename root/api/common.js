import _merge from "lodash/merge";
const KAIGON_API_ENDPOINT = "https://kaigon.sidesideeffect.io/api";

export const methods = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  PATCH: "PATCH",
  DELETE: "DELETE",
};

export function kiagonApiFetchOpts({
  method = methods.GET,
  headers = {},
  body = null,
  formData,
  ...rest
} = {}) {
  return {
    method,
    credentials : "include",
    headers: new Headers({
      ...(formData
        ? {}
        : { "Content-Type": "application/json; charset=utf-8" }),
      ...headers,
    }),
    body: formData || (body && JSON.stringify(body)),
    ...rest,
  };
}

export function normalizeResponse(resp) {
  return resp.json().then((payload) => ({ httpStatus: resp.status, payload }));
}

export async function fetches(path, optionsPromise, dataKeys = "data") {
  const options = await optionsPromise;
  return fetch(`${KAIGON_API_ENDPOINT}${path}`, options)
    .then(normalizeResponse)
    .then((resp) => {
      if (resp.httpStatus !== 200) {
        throw resp;
      }
      return resp;
    });
}

export async function fetchOpts(method, body = null, setting = {}) {
  return _merge(
    {},
    {
      method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    },
    body ? { body: JSON.stringify(body) } : {},
    setting
  );
}
