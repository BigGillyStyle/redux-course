import React, { Component } from "react";
import { Authenticate } from "../../components";
import auth from "../../helpers/auth";

export default class AuthenticateContainer extends Component {
  handleAuth = () => auth().then(user => console.log(user));

  render() {
    return (
      <Authenticate error={""} isFetching={false} onAuth={this.handleAuth} />
    );
  }
}
