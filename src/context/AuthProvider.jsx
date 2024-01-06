// AuthProvider.jsx

import React, { createContext, useContext, useState } from "react";

export const getUserLocalStorage = () => {
  return JSON.parse(localStorage.getItem("user")) || null;
};

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(getUserLocalStorage());
  const [auth, setAuth] = useState({
    // Default or initial authentication state
    phoneNoOrEmail: "",
    password: "",
    roles: [],
    accessToken: "",
  });
  //   console.log(admin)
  return (
    <AuthContext.Provider value={{ auth, setAuth, admin }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;

export const useAuthContext = () => {
  return useContext(AuthContext);
};
