import ee from "@google/earthengine";
// input your EE private key.json here
import * as privateKey from "../../../private-key.json";

export function authenticate() {
  return new Promise((resolve, reject) => {
    ee.data.authenticateViaPrivateKey(
      privateKey,
      () => {
        console.log("Authentication Success");
        ee.initialize(
          null,
          null,
          () => resolve(),
          (error) => reject(new Error(error))
        );
      },

      (error) => reject(new Error(error))
    );
  });
}
