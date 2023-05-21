// App.js
import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";

import Counter from "./counter";
import CheckData from "./other";

function App() {
  return (
    <div>
      <Counter />
      {/* <CheckData/> */}
    </div>
  );
}

export default App;
