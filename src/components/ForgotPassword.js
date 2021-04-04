import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import Auth from "../Auth";
import axios from "axios";
import Cookies from "js-cookie";

function ForgotPassword() {
  const history = useHistory();
  const [newPassword, setNewPassword] = useState("");
  const [newConfirmPassword, setNewConfirmPassword] = useState("");
  let { id } = useParams();

  const changePassword = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      data: {
        newPassword,
        newConfirmPassword,
        token: id,
      },
      withCredentials: true,
      url: "https://eldabackend.herokuapp.com/changepassword",
    }).then((res) => {
      if (res.data.msg === "Successfully Changed") {
        history.push("/login");
      } else {
        history.push("/");
      }
    });
  };

  const renderData = () => {
    if (id === undefined || id === "") {
      return (
        <div
          className="row"
          style={{
            backgroundColor: "#002C53",
            padding: 40,
            paddingTop: 90,
            paddingBottom: 160,
          }}
        >
          <div className="col-lg-1" />
          <div
            className="col-lg-4"
            style={{ color: "#BDE3FA", paddingTop: 40 }}
          >
            <h1>404</h1>
            <br />
            <h5>Could not find the page you were looking for</h5>
            <br />
          </div>
        </div>
      );
    } else {
      return (
        <div
          className="row"
          style={{
            backgroundColor: "#002C53",
            padding: 40,
            paddingTop: 90,
            paddingBottom: 160,
          }}
        >
          <div className="col-lg-1" />
          <div
            className="col-lg-4"
            style={{ color: "#BDE3FA", paddingTop: 40 }}
          >
            <h1>Change Password</h1>
            <br />
            <h2 style={{ color: "#eb5216" }}>100% Secure</h2>
            <h5>
              We make sure that everything is smooth from backend to frontend.
              So that you enjoy a seemless experience.
            </h5>
            <br />
            <h2 style={{ color: "#eb5216" }}>Get in Touch</h2>
            <h5>
              You can easily ask your mentors doubts regarding the course you
              have opted and feel free to give your opitions on the same.
            </h5>
          </div>
          <div className="col-lg-2" />
          <div className="col-lg-3">
            <form
              onSubmit={changePassword}
              style={{ color: "beige", paddingTop: 100 }}
            >
              <div className="form-group">
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control form-control-lg"
                  placeholder="New Password"
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  className="form-control form-control-lg"
                  placeholder="Confirm New Password"
                  onChange={(e) => setNewConfirmPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-block btn-lg"
                style={{ backgroundColor: "#eb5216" }}
              >
                Change Password
              </button>
              <br />
              <i>
                <center>
                  <a
                    href="https://forms.gle/WrLchc1YexLHbC4q6"
                    target="blank"
                    style={{ color: "#eb5216" }}
                  >
                    <h5>Request Admin?</h5>
                  </a>
                </center>
              </i>
              <i>
                <center>
                  <a href="/forgot/password" style={{ color: "#eb5216" }}>
                    <h5>Forgotten Password?</h5>
                  </a>
                </center>
              </i>
            </form>
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      {renderData()}
      <Footer />
    </div>
  );
}

export default ForgotPassword;
