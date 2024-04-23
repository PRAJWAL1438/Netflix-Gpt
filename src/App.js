import React from "react";
import Body from "./Components/Body";
import appStore from "./Components/utils/appStore";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
};

export default App;
