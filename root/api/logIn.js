import Login from "../../pages/Login";
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
  return fetches(
    `/account/info/password/reset`,
    kiagonApiFetchOpts({ method: methods.PATCH, body: data })
  );
}

export function refreshAuthToken(qs) {
  return fetches(`/auth/session/token/refresh?${qs}`, kiagonApiFetchOpts());
}
