import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ContexProvider } from "./context/ContextProvider";
import { UserContextProvider } from "./context/UserContext";

ReactDOM.render(
  <UserContextProvider>
    <ContexProvider>
      <App />
    </ContexProvider>
  </UserContextProvider>,
  document.getElementById("root")
);
