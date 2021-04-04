import Header from "../partials/Header";
import React, { Component } from 'react'
import Axios from 'axios'
import Footer from "../partials/Footer";

import AuthHeader2 from "../partials/AuthHeader2";
import auth from "../Auth";

export default class Courses extends Component {
    constructor(props) {
        super(props);
        this.state = {
          courses: [],
          comingsoon:[]
        };
      }

      
    componentDidMount(){
        Axios({
            method: "GET",
            withCredentials: true,
            url: "https://eldabackend.herokuapp.com/course",
          }).then((res) => {
            this.setState({
              courses: res.data.courses,
              comingsoon:res.data.comingsoon
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
      {/* check if student is logged in or not */}
      {this.renderHeader()}
      <div style={{ padding: 70 }}>
      <h3
            style={{
              fontWeight: 800,
              color: "#002C53"
            }}
          >
            Courses
          </h3>
          <br/>
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
              <br/><br/>
              <h3
            style={{
              fontWeight: 800,
              color: "#002C53"
            }}
          >
            Coming Soon
          </h3>
          <br/>
        <div className="row">
                {(this.state.comingsoon && this.state.comingsoon.length) > 0 &&
                  this.state.comingsoon.map((course) => {
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
      </div>
      <Footer />
    </div>
        )
    }
}
