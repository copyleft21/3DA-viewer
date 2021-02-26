import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import SinglePlan from "./components/SinglePlan";

function App() {
  return (
    <BrowserRouter>
        <Route component={SinglePlan} path="/:slug" />
    </BrowserRouter>
  );
}

export default App;
