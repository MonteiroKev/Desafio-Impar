import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";

import "react-toastify/dist/ReactToastify.min.css";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
      <ToastContainer />
    </>
  );
}
