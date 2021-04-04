import React, { Component } from "react";
import { BrowserRouter as Router, Link, useLocation } from "react-router-dom";

import Header from "../partials/Header";
import Footer from "../partials/Footer";

import AuthHeader2 from "../partials/AuthHeader2";
import auth from "../Auth";

import Slider1 from "../slider1.png";
import Slider2 from "../slider2.png";
import Slider3 from "../slider3.png";
import Slider4 from "../slider4.png";
import Slider5 from "../slider5.png";
import HowItWorks from "../howitworks.svg";

import Cover2 from "../cover2.jpeg";
import CampusFamily from "../CampusFamily.jpg";
import democertificate from "../democertificate.png";

import Axios from "axios";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
    };
  }

  componentDidMount() {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "https://eldabackend.herokuapp.com/course",
    }).then((res) => {
      this.setState({
        courses: res.data.courses,
      });
    });
  }

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
        <div>
          <div className="bd-example">
            <div
              id="carouselExampleCaptions"
              className="carousel slide"
              data-ride="carousel"
              data-interval="2000"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={Slider1}
                    className="d-block w-100"
                    style={{ height: 420 }}
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={Slider2}
                    className="d-block w-100"
                    style={{ height: 420 }}
                  />
                  <div className="carousel-caption d-none d-md-block"></div>
                </div>
                <div className="carousel-item">
                  <img
                    src={Slider3}
                    className="d-block w-100"
                    style={{ height: 420 }}
                  />
                  <div className="carousel-caption d-none d-md-block"></div>
                </div>
                <div className="carousel-item">
                  <img
                    src={Slider4}
                    className="d-block w-100"
                    style={{ height: 420 }}
                  />
                  <div className="carousel-caption d-none d-md-block"></div>
                </div>
                <div className="carousel-item">
                  <img
                    src={Slider5}
                    className="d-block w-100"
                    style={{ height: 420 }}
                  />
                  <div className="carousel-caption d-none d-md-block"></div>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleCaptions"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleCaptions"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
          <div className="home" style={{ backgroundColor: "#f0f9ff" }}>
            <center>
              <h3 style={{ color: "#002C53", marginTop: 80,fontWeight:700 }}>
                Richest Content for Online Learning!
              </h3>
              <br />
              <p>
              The Massive Open Online Courses(MOOCs)  web-portal is an online platform developed by IIIT Kota, to offer skill development courses for students from diversified backgrounds of Rajasthan as well as all of India in easy to understand language. This platform is specially designed to target the Indian students and to help them acquire the world class knowledge in various domains in Hindi and English in a way that can be understood easily. The courses available here are free and have rich contents to develop the various skills and apply what they learn with self-paced quizzes and hands-on projects
<br/><br/>
              </p>
              <br />
              <div className="row">
                {this.state.courses.length > 0 &&
                  this.state.courses.map((course) => {
                    return (
                      <div className="col-lg-3 col-md-6 col-sm-12">
                        <center>
                          <a
                            href={"/course/" + course._id}
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="card pubg mx-3 my-3"
                              style={{
                                width: "18rem",
                                fontFamily: '"Nunito Sans", sans-serif',
                              }}
                            >
                              <img
                                src={course.imageurl}
                                className="card-img-top"
                                style={{ height: 150 }}
                              />
                              <div className="card-body">
                                <h5
                                  className="card-title"
                                  style={{ color: "#194374" }}
                                >
                                  {course.title}
                                </h5>
                                <p style={{ color: "#FF6300" }}>
                                  <i className="fas fa-star" />
                                  &nbsp;&nbsp;Rating:&nbsp;
                                  {course.ratingValue}&nbsp;&nbsp;
                                  <i className="fas fa-clock" />
                                  &nbsp;&nbsp;{course.duration} hours
                                </p>
                                <p
                                  className="card-text"
                                  style={{ color: "#194374" }}
                                >
                                  {course.bdescription}
                                </p>
                              </div>
                            </div>
                          </a>
                        </center>
                      </div>
                    );
                  })}
              </div>
              <br /> <br /> <br />
              <br />
              <br /> <br /> <br />
              <br />
              
              <h1 style={{ color: "#002C53",fontWeight:700 }}>
                Vision
              </h1>
              <br/>
              <img src="https://i.ibb.co/Lp3xhqg/Whats-App-Image-2021-04-03-at-6-12-43-PM.jpg" style={{ width: 1200 }} />
              <br /> <br /> <br />
              <br />
              <br /> <br /> <br />
              <br />
              <h3 style={{ color: "#002C53",fontWeight:700 }}>
                Take one step ahead in your career with certification from eLDA
                LAB
              </h3>
              <p>Certificate of Completion</p>
              <img src={democertificate} style={{ width: 600 }} />
              <br /> <br /> <br />
              <br />
              <br /> <br /> <br />
              <br />
              
              <h3 style={{ color: "#002C53",fontWeight:700 }}>Memorandum of Understanding (MoU)</h3>
             
              <br />
              <img src={Cover2} style={{ width: 1000, paddingBottom: 60 }} />
              <p>
                <i>
                  IIIT Kota has signed two Memorandum of Understandings with Department of College Education, Government of Rajasthan and BADEN network, Serbia respectively for the efficient implementation, development, and maintenance of the courses.
                </i>
              </p>
              <br /> <br /> <br />
              <br />
              <br /> <br /> <br />
              <br />
              <h1 style={{ color: "#002C53",fontWeight:700 }}>How It Works ?</h1>
              <br/><br/><br/>
              <p>
             🎌 Register on the portal with correct information.<br/>
             ✨ Explore the available courses <br/>
             🤔 Enroll in any number of courses<br/>
             🤓 Attend the courses <br/>
             🙋 Quizzes after modules per week<br/>
             📜 After attending the course more than 80%, student can request for the certification<br/>
             😊 Certificates after successful completion of the course (must score more than 80% marks in quizzes)

             </p>
              <img src={HowItWorks} style={{width:"100%",height:"500px"}}/>
             
              <br />
              <div className="row"></div>
              <br /> <br /> <br />
              <br />
              <br /> <br /> <br />
              <br />
              <h3 style={{ color: "#002C53",fontWeight:700 }}>Our Campus Family ❤️</h3>
              <br />
              <p>
                We at Indian Institute of Information Technology, Kota are proud
                to partner with MOOC to provide free and rich learning material
                for students all over India. This platform is designed to
                provide rich and free of cost learning all over to students from
                all over India. We have forged this with our heart and soul and
                we wish that you learn and grow here.{" "}
              </p>
              <br />
              <img
                src={CampusFamily}
                style={{ width: "100%", paddingBottom: 60 }}
              />
            
              <br /> <br /> <br />
              <br />
              <h3 style={{ color: "#002C53",fontWeight:700 }}>
                  About IIIT Kota
              </h3>
              <p>Indian Institute of Information Technology, Kota (IIIT Kota) is an Institute of National Importance. IIIT Kota is a joint venture of the MHRD, Govt. of India, and Govt. of Rajasthan with Industry Partners in Public- Private- Partnership (PPP) mode. IIITKota was established in 2013. Currently the institute is mentored by MNIT Jaipur. The institute is governed by the eminent personalities of the Government, Industry and Academia. Currently, we offer B.Tech in the discipline of Computer Science & Engineering and Electronics & Communication Engineering only. </p>
              
            </center>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
