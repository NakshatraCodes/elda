import React, { Component } from "react";

import Header from "../partials/Header";
import Footer from "../partials/Footer";

import AuthHeader2 from "../partials/AuthHeader2";
import auth from "../Auth";


export default class Privacy extends Component {
  renderHeader() {
    if (auth.isAuthenticated()) {
      return <AuthHeader2 />;
    } else {
      return <Header />;
    }
  }
  render() {
    return (
      <div>
        {this.renderHeader()}
        <div style={{ padding: 70 }}>
          <h4
            style={{
              fontWeight: 800,
              color: "#002C53"
            }}
          >
            Privacy Policy
          </h4>
          <ul>
            <li></li>
          </ul>
        </div>

        <Footer />
      </div>
    );
  }
}
