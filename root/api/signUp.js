import { fetches, kiagonApiFetchOpts, methods } from "./common";

export function getCaptchaUuid(data) {
  return fetches(`/auth/captcha`, kiagonApiFetchOpts());
}

export function reloadCaptchaImage(catpchaUuid) {
  return fetches(`/auth/captcha/${catpchaUuid}/refresh`, kiagonApiFetchOpts());
}

export function signUp(data) {
  return fetches(
    `/account/signup`,
    kiagonApiFetchOpts({ method: methods.POST, body: data })
  );
}
