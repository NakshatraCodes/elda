import React, { Component } from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";

import AuthHeader2 from "../partials/AuthHeader2";
import auth from "../Auth";

export default class Contact extends Component {
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
            Contact Us
          </h4>
          <hr />
          <p>
            If you have a question or a comment, please call us on{" "}
            <a href="tel:0141-2715071">0141-2715071</a>{" "}
            <strong>(9.30am to 5.30pm. Monday to Friday.) </strong>or email us
            at <a href="mailto:elda@iiitkota.ac.in">elda@iiitkota.ac.in</a>{" "}
            or fill this{" "}
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfcRtJuiOMTYpVNaGO6NksfZbDYKx3ejocsaaGa_K-CuHolcw/viewform?embedded=true">form</a>{" "}
            to contact us.
          </p>
          <br />
          <div className="row">
            <div className="col-lg-6">
              <p>If you live in Jaipur, you can also visit our office: </p>
              <div className="mapouter">
                <div className="gmap_canvas">
                  <iframe
                    width={711}
                    height={309}
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=iiitkota&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    frameBorder={0}
                    scrolling="no"
                    marginHeight={0}
                    marginWidth={0}
                  />
                  <br />
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        ".mapouter{position:relative;text-align:right;height:309px;width:711px;}",
                    }}
                  />
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        ".gmap_canvas {overflow:hidden;background:none!important;height:309px;width:711px;}",
                    }}
                  />
                </div>
              </div>
              <br />
              <br />
                <p style={{ fontWeight:800 }}>
                  Indian Institute of Information Technology Kota
                  <br />
                  MNIT Jaipur, Malviya Nagar, JLN Marg
                  <br />
                  Jaipur (302017), Rajasthan
                </p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
