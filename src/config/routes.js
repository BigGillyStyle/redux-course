import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { MainContainer, HomeContainer } from "../containers";

const routes = (
  <Router>
    <div>
      <Route path="/" component={MainContainer} />
      <Route exact path="/" component={HomeContainer} />
    </div>
  </Router>
);

export default routes;
