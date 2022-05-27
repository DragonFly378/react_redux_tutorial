import React from "react";
import "./App.css";
import CakeContainerHooks from "./components/CakeContainerHooks";
import IceCreamContainer from "./components/IceCreamContainer";

import store from "./store/store";
import { Provider } from "react-redux";
import NewIceCreamContainer from "./components/NewIceCreamContainer";
import CakeContainer from "./components/CakeContainer";
import ItemContainer from "./components/ItemContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ItemContainer cake />
        <CakeContainer />
        <CakeContainerHooks />
        <IceCreamContainer />
        <NewIceCreamContainer />
      </div>
    </Provider>
  );
}

export default App;
