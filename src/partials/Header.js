import React from "react";
import logo from '../eldalogo.png'
import logo2 from "../eldalogowt.png"

export default function Header() {
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
            <img src={logo2} style={{width:90}} />
          </a>
        </div>
        <div className="col-lg-9">
          <div>
            <h3>e-Learning and Data Analytics Lab</h3>
            <h6>
              <strong>Indian Institute of Information Technology KOTA</strong>
            </h6>
           
          </div>
          <div className="row">
            <a href="">
              <button type="button" disabled="true" className="btn btn-light btn-sm" />
            </a>
            &nbsp;
            <a href="">
              <button type="button" disabled="true" className="btn btn-light btn-sm" />
            </a>
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
  <div className="row my-1" style={{marginInline:70}}>
    <a href="/" id="header-btn1" style={{fontWeight: 700, color: '#002C53',textShadow:"0.5px 0.5px #E53A12"}}><button className="btn btn-info btn-sm" style={{fontWeight: 700,}}>HOME</button></a> &nbsp;&nbsp;&nbsp;&nbsp;
    <a href="/about" id="header-btn1" style={{fontWeight: 700, color: '#002C53',textShadow:"0.5px 0.5px #E53A12"}}><button className="btn btn-info btn-sm" style={{fontWeight: 700,}}>ABOUT US</button></a> &nbsp;&nbsp;&nbsp;&nbsp;
    {/* <a href="/projects" id="header-btn1" style={{fontWeight: 700, color: '#002C53',textShadow:"0.5px 0.5px #E53A12"}}>PROJECTS</a> &nbsp;&nbsp;&nbsp;&nbsp;
    <a href="/partners" id="header-btn1" style={{fontWeight: 700, color: '#002C53',textShadow:"0.5px 0.5px #E53A12"}}>PARTNERS</a> &nbsp;&nbsp;&nbsp;&nbsp; */}
    <a href="/courses" id="header-btn1" style={{fontWeight: 700, color: '#002C53',textShadow:"0.5px 0.5px #E53A12"}}><button className="btn btn-info btn-sm" style={{fontWeight: 700,}}>COURSES</button></a> &nbsp;&nbsp;&nbsp;&nbsp;
    <a href="/contact" id="header-btn1" style={{fontWeight: 700, color: '#002C53',textShadow:"0.5px 0.5px #E53A12"}}><button className="btn btn-info btn-sm" style={{fontWeight: 700,}}>CONTACT US</button></a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </div>

    </div>
  );
}
