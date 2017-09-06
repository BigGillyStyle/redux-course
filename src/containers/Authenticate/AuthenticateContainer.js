import React, { Component } from "react";
import PropTypes from "prop-types";
import { Authenticate } from "../../components";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as userActionCreators from "../../redux/modules/users";

class AuthenticateContainer extends Component {
  handleAuth = () => this.props.fetchAndHandleAuthedUser();

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
  fetchAndHandleAuthedUser: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired
};

const mapStateToProps = state => {
  console.log(state);
  return { isFetching: state.isFetching, error: state.error };
};

export default connect(mapStateToProps, dispatch =>
  bindActionCreators(userActionCreators, dispatch)
)(AuthenticateContainer);
