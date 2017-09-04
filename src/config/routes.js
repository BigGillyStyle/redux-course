import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { MainContainer, HomeContainer } from "../containers";
import AuthenticateContainer from "../containers/Authenticate/AuthenticateContainer";

const routes = (
  <Router>
    <div>
      <Route path="/" component={MainContainer} />
      <Route exact path="/" component={HomeContainer} />
      <Route path="/auth" component={AuthenticateContainer} />
    </div>
  </Router>
);

export default routes;
