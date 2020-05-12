import React, { FunctionComponent } from "react";
import { Provider } from "react-redux";

import { configure } from "./store/configureStore";
import Navigation from "./screens/navigation";

const store = configure();
GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest; // eslint-disable-line no-undef

const App: FunctionComponent = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
