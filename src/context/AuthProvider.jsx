import React, { createContext, useContext, useState } from "react";

export const getUserLocalStorage = () => {
  return JSON.parse(localStorage.getItem("user")) || null;
};

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(getUserLocalStorage());

  const [auth, setAuth] = useState({
    phoneNoOrEmail: "",
    password: "",
    roles: [],
    accessToken: "",
  });

  return (
    <AuthContext.Provider value={{ auth, setAuth, admin, setAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;

export const useAuthContext = () => {
  return useContext(AuthContext);
};
