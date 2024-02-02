import { useState } from "react";
import { useContext, createContext } from "react";

const AppContext = createContext(null);

const DataImportProvider = ({ children }) => {
  const [isCreateShipment, setisShipment] = useState(false);

  const openCategoryForm = () => {
    setisShipment(true);
  };
  const closeCreateCategory = () => {
    setisShipment(false);
  };

  return (
    <AppContext.Provider
      value={{
        closeCreateCategory,
        isCreateShipment,
        openCategoryForm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default DataImportProvider;

export const useDataImportContext = () => {
  return useContext(AppContext);
};
