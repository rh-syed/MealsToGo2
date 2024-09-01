import React from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const logInRequest = (auth, email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const signUpRequest = (auth, email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};
