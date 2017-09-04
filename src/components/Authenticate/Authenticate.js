import React from "react";
import PropTypes from "prop-types";
import "../../sharedStyles/styles.css";
import { FacebookAuthButton } from "../index";

Authenticate.propTypes = {
  error: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  onAuth: PropTypes.func.isRequired
};

export default function Authenticate({ onAuth, isFetching, error }) {
  return (
    <div className="centered-container">
      <h1 className="large-header">{"Authenticate"}</h1>
      <FacebookAuthButton isFetching={isFetching} onAuth={onAuth} />
      {error ? <p className="error-message">{error}</p> : null}
    </div>
  );
}
