import { useState } from "react";
import { useContext, createContext } from "react";


// export const getUserLocalStorage = () => {
//   return JSON.parse(localStorage.getItem("user")) || null;
// };

//  const [admin, setAdmin] = useState(getUserLocalStorage());

const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <AppContext.Provider value={{ isSidebarOpen, openSidebar, closeSidebar }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

export const useAppContext = () => {
  return useContext(AppContext);
};
