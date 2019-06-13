import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { Provider } from "mobx-react";
import CounterStore from "./stores/CounterStore"; // 스토어 import
import MarketStore from "./stores/MarketStore"; // 스토어 import

const counterStore = new CounterStore(); // 스토어 인스턴스 생성
const marketStore = new MarketStore(); // 스토어 인스턴스 생성

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
  <Provider counterStore={counterStore} marketStore={marketStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
