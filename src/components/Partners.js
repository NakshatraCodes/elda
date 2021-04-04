import React, { Component } from "react";

import Header from "../partials/Header";
import Footer from "../partials/Footer";

import AuthHeader2 from "../partials/AuthHeader2";
import auth from "../Auth";

import logo from "../hg.png"
import logo2 from "../coglogo.jpg"

export default class Partners extends Component {
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
            Partners
          </h4>
          <br/> <br />
          <div className="row">
              
            <div className="col-lg-3">
                <center>
                <img src={logo2} style={{borderRadius:"50%",width:"200px"}} />
               
                
            </center>
             
            </div>
            <div className="col-lg-3">
            <center>
                
            <img src={logo} style={{width:"200px"}} />
            </center>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
