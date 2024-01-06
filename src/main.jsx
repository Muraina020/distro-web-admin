import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import AppProvider from "./context/AppContext.jsx";
import { AuthProvider } from './context/AuthProvider.jsx';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <ChakraProvider>
      <AppProvider>
       <App />
      </AppProvider>
    </ChakraProvider>
    </AuthProvider>
  </React.StrictMode>
);
