import React from "react";
import logo from "../hg.png"
import logo2 from "../coglogo.jpg"

export default function Footer() {
  return (
    <div>
      <footer className="site-footer">
        <div className="container" style={{fontFamily: '"Nunito Sans",sans-serif'}}>
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>About</h6>
              <p className="text-justify">
                Mooc web-portal is an online platform developed by IIIT Kota, to
                offer skill development Massive Open Online Courses(MOOCs) for
                students from diversified backgrounds of Rajasthan as well as
                all of India. This platform is specially designed to target the
                Indian students and to help them acquire the world class
                knowledge in various domains.{" "}
              </p>
            </div>
            <div className="col-xs-6 col-md-3">
              <h6>Powered By</h6>
              <div className="row" style={{ paddingLeft: 14 }}>
                <a href>
                  <img
                    src={logo}
                    style={{ height: 50, margin: 7 }}
                  />
                </a>
                <a href>
                  <img
                    src={logo2}
                    style={{ height: 50, margin: 7 }}
                  />
                </a>
              </div>
            </div>
            <div className="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul className="footer-links">
              <li>
                  <a href="/about">About Us</a>
                </li>
                <li>
                  <a href="/contact">Contact Us</a>
                </li>
                <li>
                  <a href="/partners">Partners</a>
                </li>
                <li>
                  <a href="/projects">Projects</a>
                </li>
                <li>
                  <a href="/privacy-policy">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">
                Copyright © 2020 All Rights Reserved by&nbsp;
                <a href="#">IIIT KOTA</a>.
              </p>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li>
                  <a
                    className="facebook"
                    href="https://www.facebook.com/IIITKotaOffice"
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a
                    className="instagram"
                    href="https://www.instagram.com/iiitkotaoffice/"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </li>
                <li>
                  <a
                    className="linkedin"
                    href="https://www.linkedin.com/school/iiitkota/"
                  >
                    <i className="fab fa-linkedin" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
