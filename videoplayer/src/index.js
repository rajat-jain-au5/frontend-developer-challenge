import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
// import store from "./Redux/stateReducers";
import {
  createStateSyncMiddleware,
  initMessageListener,
  initStateWithPrevTab,
} from "redux-state-sync";
import { createStore, applyMiddleware } from "redux";
import stateReducer from "./Redux/stateReducers";
const config = {
  whitelist: ["SUBMIT", "DELETE_URL", "CLICK_URL", "VIDEO_END"],
  // enforce a type, oneOf['native', 'idb', 'localstorage', 'node']
  broadcastChannelOption: { type: "localstorage" },
};
const middlewares = [createStateSyncMiddleware(config)];
let store = createStore(stateReducer,  applyMiddleware(...middlewares));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
 
initMessageListener(store);
initStateWithPrevTab(store)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
