import { fetches, kiagonApiFetchOpts, methods } from "./common";

export function uploadImageToS3(data) {
  return fetches(
    `/image`,
    kiagonApiFetchOpts({ method: methods.POST, body: data })
  );
}
