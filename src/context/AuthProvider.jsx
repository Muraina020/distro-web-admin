// AuthProvider.jsx

import React, { createContext, useContext, useEffect, useState } from "react";

export const getUserLocalStorage = () => {
  return JSON.parse(localStorage.getItem("user")) || null;
};

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(getUserLocalStorage());

  // useEffect(() => {
  //   const storedAdminState = localStorage.getItem("user");
  //   if (storedAdminState) {
  //     setAdmin(JSON.parse(storedAdminState));
  //   }
  // }, []);

  const [auth, setAuth] = useState({
    // Default or initial authentication state
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
