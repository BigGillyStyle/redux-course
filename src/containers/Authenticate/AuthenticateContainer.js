import React, { Component } from "react";
import PropTypes from "prop-types";
import { Authenticate } from "../../components";
import auth from "../../helpers/auth";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as userActionCreators from "../../redux/modules/users";

class AuthenticateContainer extends Component {
  handleAuth = () => {
    this.props.fetchingUser();
    auth().then(user => {
      this.props.fetchingUserSuccess(user.uid, user, Date.now());
      this.props.authUser(user.uid);
    });
  };

  render() {
    return (
      <Authenticate
        error={this.props.error}
        isFetching={this.props.isFetching}
        onAuth={this.handleAuth}
      />
    );
  }
}

AuthenticateContainer.propTypes = {
  authUser: PropTypes.func.isRequired,
  fetchingUser: PropTypes.func.isRequired,
  fetchingUserFailure: PropTypes.func.isRequired,
  fetchingUserSuccess: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired
};

export default connect(
  state => ({ isFetching: state.isFetching, error: state.error }),
  dispatch => bindActionCreators(userActionCreators, dispatch)
)(AuthenticateContainer);
