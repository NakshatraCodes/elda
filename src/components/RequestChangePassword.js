import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import Auth from "../Auth";
import axios from "axios";

function Login() {
  const history = useHistory();
  const [loginEmail, setLoginEmail] = useState("");

  const changePass = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      data: {
        mail: loginEmail,
      },
      withCredentials: true,
      url: "https://eldabackend.herokuapp.com/forgotpassword",
    }).then((res) => {
      console.log(res.data);
      if (res.data.msg === "Please check Your mail for verification mail.") {
        history.push("/login");
      } else {
        history.push("/");
      }
    });
  };
  return (
    <div>
      <Header />
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
        <div className="col-lg-4" style={{ color: "#BDE3FA", paddingTop: 40 }}>
          <h1>Student Login</h1>
          <br />
          <h2 style={{ color: "#eb5216" }}>100% Secure</h2>
          <h5>
            We make sure that everything is smooth from backend to frontend. So
            that you enjoy a seemless experience.
          </h5>
          <br />
          <h2 style={{ color: "#eb5216" }}>Get in Touch</h2>
          <h5>
            You can easily ask your mentors doubts regarding the course you have
            opted and feel free to give your opitions on the same.
          </h5>
        </div>
        <div className="col-lg-2" />
        <div className="col-lg-3">
          <form
            onSubmit={changePass}
            style={{ color: "beige", paddingTop: 100 }}
          >
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                className="form-control form-control-lg"
                placeholder="Email address"
                onChange={(e) => setLoginEmail(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-block btn-lg"
              style={{ backgroundColor: "#eb5216" }}
            >
              Send Link to Email
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
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
