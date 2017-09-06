import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import routes from "./config/routes";
import users from "./redux/modules/users";
import { createStore } from "redux";
import { Provider } from "react-redux";
import registerServiceWorker from "./registerServiceWorker";

const store = createStore(users);
ReactDOM.render(
  <Provider store={store}>{routes}</Provider>,
  document.getElementById("root")
);
registerServiceWorker();
