import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import SinglePlan from "./components/SinglePlan";
import Soon from "./components/Soon";

function App() {
  return (
    <BrowserRouter>
        <Route component={SinglePlan} path="/:slug" />
        <Route component={Soon} path="/" exact />
    </BrowserRouter>
  );
}

export default App;
