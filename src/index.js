import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { ContexProvider } from "./context/ContextProvider";
import App from "./App";

import "./index.css";

ReactDOM.render(
  <ContexProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ContexProvider>,
  document.getElementById("root")
);
