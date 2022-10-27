import { fetches, kiagonApiFetchOpts, fetchOpts } from "./common";

export function getCaptchaUuid(data) {
  return fetches(`/auth/captcha`, kiagonApiFetchOpts());
}

export function reloadCaptchaImage(catpchaUuid) {
  return fetches(`/auth/captcha/${catpchaUuid}/refresh`, kiagonApiFetchOpts());
}
