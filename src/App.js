import React from "react";
import { HashRouter, Route } from "react-router-dom";
import SinglePlan from "./components/SinglePlan";
import Soon from "./components/Soon";

function App() {
  return (
    <HashRouter>
      <Route component={SinglePlan} path="/:slug" />
      <Route component={Soon} path="/" exact />
    </HashRouter>
  );
}

export default App;
