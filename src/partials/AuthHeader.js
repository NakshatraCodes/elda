import React, { useEffect, useState } from "react";
import Axios from "axios";
import logo from "../eldalogowt.png";
import { useHistory } from "react-router-dom";
import user from "../demouserimg.jpg";
import auth from "../Auth";
import { getSuggestedQuery } from "@testing-library/dom";

export default function AuthHeader(props) {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const handleLogout = async (e) => {
    e.preventDefault();
    auth.logout(() => {
      history.push("/");
    });
  };

  useEffect(() => {
    auth.getUser((user) => {
      if (!user) {
        setUsername("");
      } else {
        setUsername(user.name);
      }
    });
  }, []);

  return (
    <div
      style={{
        background: "linear-gradient(#bde3fa, #FFFFFF)",
        fontFamily: "'Nunito Sans', sans-serif",
        color: "#002C53",
      }}
    >
      <div className="row mx-5 py-1" style={{}}>
        <div className="col-lg-5">
          <div className="row">
          <a href="/dashboard">
            <img className="my-3" src={logo} style={{ height: 60 }} />
          </a>
          <div style={{marginLeft:20,marginTop:20}}>
            <h4>e-Learning and Data Analytics Lab</h4>
            <h6>
              <strong>Indian Institute of Information Technology KOTA</strong>
            </h6>
           
          </div>
          </div>
          
        </div>
        <div className="col-lg-5 my-1">
        </div>
        <div className="col-lg-2 py-3">
          <div className="row">
            <img
              src="https://minio.codingblocks.com/img/avatar-36.svg"
              style={{ height: 30, borderRadius: "50%" }}
            />
            &nbsp;&nbsp;
            <p style={{ fontSize: 20 }}>{username}</p>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "100",
          height: 50,
          textAlign: "right",
        }}
        className="mx-1"
      >
        <p className="my-2">
          <a
            href="/dashboard"
            id="header-btn1"
            style={{ fontWeight: 700, color: "#002C53" }}
          >
           Dashboard
          </a>{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a
            href="/courses"
            id="header-btn1"
            style={{ fontWeight: 700, color: "#002C53" }}
          >
           Courses
          </a>{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a
            href="/"
            id="header-btn1"
            style={{ fontWeight: 700, color: "#002C53" }}
          >
            Home
          </a>{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {/* <a
            href="/home"
            id="header-btn1"
            style={{ fontWeight: 600, color: "#002C53" }}
          >
            Resources
          </a>{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
          <a
            href="/contact"
            id="header-btn1"
            style={{ fontWeight: 700, color: "#002C53" }}
          >
            Contact Us
          </a>{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a
            onClick={handleLogout}
            id="header-btn1"
            style={{ fontWeight: 700, color: "#002C53" }}
            onFocus={{ color: "blue" }}
          >
            <button className="btn btn-info btn-sm" style={{fontWeight: 700,}}>Logout</button>
          </a>{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </p>
      </div>
    </div>
  );
}
