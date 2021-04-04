import React, { Component } from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";

import AuthHeader2 from "../partials/AuthHeader2";
import auth from "../Auth";

export default class About extends Component {
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
              color: "#002C53",
            }}
          >     Projects
          </h4>
          <br/> <br/> <br/>
          <li style={{
              fontWeight: 700,
              color: "#002C53",
            }}>
          Supporting collegiate youth and teachers by integrating meaningful analytic data with massive open online courses funded by HG Foundation.
         
          </li>
          
        </div>
        <br/> <br/><br/> 
        <Footer />
      </div>
    );
  }
}
