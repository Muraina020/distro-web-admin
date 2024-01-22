import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import AppProvider from "./context/AppContext.jsx";
import { AuthProvider } from "./context/AuthProvider.jsx";
import { ToastContainer } from "react-toastify";
import ChatContextProvider from "./context/ChatContext.jsx";
import DataImportProvider from "./context/DataImportContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ChatContextProvider>
        <DataImportProvider>
          <ChakraProvider>
            <AppProvider>
              <App />
              <ToastContainer position="top-right" />
            </AppProvider>
          </ChakraProvider>
        </DataImportProvider>
      </ChatContextProvider>
    </AuthProvider>
  </React.StrictMode>
);
