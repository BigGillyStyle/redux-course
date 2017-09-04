import React, { Component } from "react";
import PropTypes from "prop-types";
import "./styles.css";
import { Navigation } from "../../components";

export default class MainContainer extends Component {
  render() {
    return (
      <div className="centered-container">
        <Navigation isAuthed={false} />
        <div className="innerContainer">{this.props.children}</div>
      </div>
    );
  }
}

MainContainer.propTypes = {
  children: PropTypes.node
};
