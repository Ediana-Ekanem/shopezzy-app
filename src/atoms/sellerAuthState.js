// atoms/sellerAuthState.js
import { atom } from "recoil";

export const sellerAuthState = atom({
  key: "sellerAuthState",
  default: false, // Initially, the user is not authenticated
});
