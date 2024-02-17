import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext({});

export const AssignOrderProvider = ({ children }) => {
  const [orderId, setOrderId] = useState(null);

  return (
    <AuthContext.Provider value={{ orderId, setOrderId }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;

export const useAsiignDriverContext = () => {
  return useContext(AuthContext);
};
