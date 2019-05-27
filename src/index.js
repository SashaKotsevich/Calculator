import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/appContainer";
import { Provider } from "react-redux";
import store from "./store/store";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
