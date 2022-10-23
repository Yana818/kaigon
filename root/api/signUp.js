import { fetches, kiagonApiFetchOpts, fetchOpts } from "./common";

export function getCaptchaUuid(data) {
  return fetches(`/auth/captcha`, kiagonApiFetchOpts());
}

// export function getCatptchaImage(captchaUuid) {
//   return fetches(
//     `/auth/captcha/${captchaUuid}/image`,
//     fetchOpts("GET", null, {
//       headers: {
//         "Content-Type": "image/png",
//         Accept: "image/png",
//       },
//     })
//   );
// }
