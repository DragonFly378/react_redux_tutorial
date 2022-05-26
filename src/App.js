import React from "react";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import CakeContainerHooks from "./components/CakeContainerHooks";

import store from "./store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainerHooks />
        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;
