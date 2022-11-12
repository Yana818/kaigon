import { fetches, kiagonApiFetchOpts, methods } from "./common";

export function sendForgetPasswordEmail(data) {
  return fetches(
    `/account/info/password/reset`,
    kiagonApiFetchOpts({ method: methods.POST, body: data })
  );
}

export function logIn(data) {
  return fetches(
    `/account/signin`,
    kiagonApiFetchOpts({ method: methods.POST, body: data })
  );
}

export function resetPassword(data) {
  return fetches(`/account/info/password/reset`, kiagonApiFetchOpts());
}

export function refreshAuthToken() {
  return fetches(`/auth/session/token/refresh`, kiagonApiFetchOpts());
}

export function logInWithGoogle() {
  return fetches(
    `/auth/o/google/url?type=login&redirectPath=/`,
    kiagonApiFetchOpts()
  );
}
