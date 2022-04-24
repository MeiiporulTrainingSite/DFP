import ReactDOM from "react-dom";
import { StyledEngineProvider } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { Provider } from "react-redux";
import store from "./Pages/store"


const rootElement = document.getElementById("root");
ReactDOM.render(
  <StyledEngineProvider injectFirst>
    <BrowserRouter>
    <Provider store={store}>
      <App />
      </Provider>
    </BrowserRouter>
  </StyledEngineProvider>,

  rootElement
);
