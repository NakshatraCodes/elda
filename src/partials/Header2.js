import React from "react";
import logo from '../eldalogo.png'

export default function Header2() {
  return (
    <div
      style={{
        background: "linear-gradient(#bde3fa, #F0F9FF)",
        color: "#002C53",
        padding: 30,
        marginRight: 0,
      }}
      className="px-5"
    >
      <div className="row">
        <div className="col-lg-1">
          <a href="/">
            <img src={logo} style={{width:120}} />
          </a>
        </div>
        <div className="col-lg-9">
          <div>
            <h2>E-Learning and Data Analytics Lab</h2>
            <h5>
              <strong>Indian Institute of Information Technology, KOTA</strong>
            </h5>
            <h6>
              <a href="https://www.mooc.org/">Powered by MOOC™</a>{" "}
            </h6>
          </div>
        </div>
        <div className="col-lg-2">
          <div className="row">
            &nbsp;&nbsp;&nbsp;
            <a href="/login">
              <button type="button" className="btn btn-light btn-sm">
                Login
              </button>
            </a>
            &nbsp;
            <a href="/register">
              <button type="button" className="btn btn-light btn-sm">
                Register
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
