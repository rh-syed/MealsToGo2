import React, { createContext, useState } from "react";
import { FIREBASE_AUTH } from "../../utils/firebase.config";
import { logInRequest, signUpRequest } from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);

  //   FIREBASE_AUTH.onAuthStateChanged((usr) => {
  //     if (usr) {
  //       setUser(usr);
  //       setLoading(false);
  //     } else {
  //       console.log("no usr", usr);
  //       setLoading(false);
  //     }
  //   });

  const onLogin = (email, password) => {
    setLoading(true);

    logInRequest(FIREBASE_AUTH, email, password)
      .then((u) => {
        setUser(u);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
        setError(e.toString());
      });
  };

  const onRegister = (email, password, repeatedPassword) => {
    if (password !== repeatedPassword) {
      setError("Error: Passwords do not match");
      return;
    }
    setLoading(true);
    signUpRequest(FIREBASE_AUTH, email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        setError(e.toString());
      });
  };
  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
