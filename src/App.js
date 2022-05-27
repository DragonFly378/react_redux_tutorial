import React from "react";
import "./App.css";
import CakeContainerHooks from "./components/CakeContainerHooks";
import IceCreamContainer from "./components/IceCreamContainer";

import store from "./store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainerHooks />
        <IceCreamContainer />
      </div>
    </Provider>
  );
}

export default App;
