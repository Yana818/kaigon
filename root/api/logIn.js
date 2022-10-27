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
