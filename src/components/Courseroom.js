import React, { Component } from "react";
import AuthHeader2 from "../partials/AuthHeader2";
import ReactStars from "react-rating-stars-component";
import Axios from "axios";
import { animateScroll as scroll } from "react-scroll";

const starDef = {
  size: 30,
  count: 5,
  isHalf: false,
  value: 5,
  color: "grey",
  activeColor: "#ffd700",
  onChange: (val) => {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "https://eldabackend.herokuapp.com/rating/" + course_url + "/" + val,
    }).then((res) => {
      if (res.data.token) {
        window.location.reload();
      } else {
        console.log(res.data);
      }
    });
  },
};

var course_url = "";

export default class Courseroom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuth: true,
      isRated: false,
      course: "",
      url: "",
      stats: "",
      user: "",
      status: "",
      link: "",
    };
    this.handleCertificateRequest = this.handleCertificateRequest.bind(this);
  }

  componentDidMount() {
    course_url = this.props.match.params.id;
    // Checks if User has rated the course or not
    Axios({
      method: "GET",
      withCredentials: true,
      url:
        "https://eldabackend.herokuapp.com/check/rating/" +
        this.props.match.params.id,
    }).then((res) => {
      console.log(res.data);
      //  Implement this in every protected route
      if (res.data.msg === "Authentication Not Done") {
        localStorage.removeItem("mooc-list");
        this.props.history.push({ pathname: "/login" });
      }
      if (res.data.token == "121") {
        this.setState({
          isRated: true,
        });
      }
    });

    // Retrieves the details of that course and student's progress
    Axios({
      method: "GET",
      withCredentials: true,
      url:
        "https://eldabackend.herokuapp.com/courseroom/" +
        this.props.match.params.id,
    }).then((res) => {
      this.setState({
        course: res.data.course[0],
        user: res.data.user,
      });
    });

    // Retrieves the stats of course for some user
    Axios({
      method: "GET",
      withCredentials: true,
      url:
        "https://eldabackend.herokuapp.com/course/stats/" +
        this.props.match.params.id,
    }).then((res) => {
      console.log(res.data);
      this.setState({
        stats: res.data.stats,
      });
    });
  }

  handleCertificateRequest() {
    Axios({
      method: "GET",
      withCredentials: true,
      url:
        "https://eldabackend.herokuapp.com/course/request/" +
        this.props.match.params.id,
    }).then((res) => {
      if (res.data.success === true) {
        let uri = res.data.uri;
        console.log(uri);
        this.setState({
          status: res.data.success,
          link: uri,
        });
      }
    });
    scroll.scrollToTop();
  }

  render() {
    // if (!this.state.isAuth) return <Redirect to="/login" />;
    return (
      <div>
        <AuthHeader2 name={this.state.user.name} />
        {this.state.status != "" && (
          <div
            className="alert alert-success alert-dismissible fade show"
            role="alert"
            style={{ paddingBottom: 0 }}
          >
            <strong>
              {this.state.status == "1234" && (
                <p>
                  You need to verify your email first before generating Certificate.
                </p>
              )}
              {this.state.status == true && (
                <p>
                  Congratulations🎉 Your Certificate is generated {" "}
                  <a
                    download="EDUMOOC-Certificate"
                    href={this.state.link}
                    title="Download pdf document"
                  >
                   here. 
                  </a>
                </p>
              )}
            </strong>
            <button
              type="button"
              className="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
        )}
        <div>
          <div
            className="row"
            style={{
              padding: 85,
              paddingTop: 10,
              paddingBottom: 20,
            }}
          >
            <div className="col-lg-12">
              <a href="/dashboard">
                <i class="fas fa-backward"></i>{" "}
                <span style={{ fontWeight: 600 }}>Dashboard</span>
              </a>
              <p
                style={{
                  fontWeight: 700,
                  fontSize: "large",
                }}
              >
                Continue Learning...
              </p>
              <div
                style={{
                  borderRadius: 20,
                  border: "solid 1px #f0f0f0",
                  padding: 30,
                }}
              >
                <div className="row">
                  <div className="col-lg-4 py-3 px-5">
                    <img
                      src={this.state.course.imageurl}
                      style={{ height: 200, width: "100%", borderRadius: 10 }}
                    />
                  </div>
                  <div className="col-lg-8">
                    <p style={{ fontSize: 50, fontWeight: 1000 }}>
                      {this.state.course.title}
                    </p>
                    {/* <p style={{fontSize:14}}>
                      by{(this.state.course.authors!=undefined) && this.state.course.authors.map((author)=>{
                        return <span>&nbsp;{author.name} &nbsp;</span>
                      })}
                    </p> */}
                    <br />
                    <p style={{ color: "#666666" }}>
                      <i className="fas fa-star" />
                      &nbsp;&nbsp;Rating {this.state.course.ratingValue}
                      &nbsp;&nbsp;
                      <i className="fas fa-clock" />
                      &nbsp;&nbsp;{this.state.course.duration} hours
                    </p>
                    {/* <p
                      style={{
                        color: "#000000",
                        fontWeight:600
                      }}
                    >
                      Your Performance <i className="fas fa-stopwatch-20" />&nbsp;
                      <span style={{color:"#002C53"}}>Above Average</span>
                    </p> */}
                    <p
                      style={{
                        fontWeight: 400,
                        fontStyle: "normal",
                      }}
                    >
                      {!this.state.isRated ? "Leave a Rating: " : ""}
                      {!this.state.isRated ? (
                        <ReactStars
                          {...{
                            size: 30,
                            count: 5,
                            isHalf: false,
                            value: 5,
                            color: "grey",
                            activeColor: "#ffd700",
                            onChange: (val) => {
                              this.setState({
                                isRated: true,
                              });
                              Axios({
                                method: "GET",
                                withCredentials: true,
                                url:
                                  "https://eldabackend.herokuapp.com/rating/" +
                                  course_url +
                                  "/" +
                                  val,
                              }).then((res) => {
                                this.componentDidMount();
                              });
                            },
                          }}
                        />
                      ) : (
                        ""
                      )}
                    </p>
                    <p style={{ color: "#000000", fontWeight: 600 }}>
                      Total Modules Completed{" "}
                      <span style={{ color: "#002C53" }}>
                        {this.state.stats.count}/{this.state.stats.total_cnt}
                      </span>
                    </p>
                  </div>
                </div>
                <br />
                <p
                  style={{
                    fontWeight: 650,
                  }}
                >
                  Course Progress
                </p>
                <div className="progress" style={{ height: 12 }}>
                  <div
                    className="progress-bar progress-bar-striped"
                    role="progressbar"
                    style={{
                      width: this.state.stats.percentage * 1300,
                      fontWeight: 650,
                    }}
                    aria-valuenow={this.state.stats.percentage * 1300}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    {(this.state.stats.percentage * 100).toFixed(0)} %
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-lg-11">
                    {/* <p
                      style={{
                        fontFamily: '"Nunito Sans",sans-serif',
                        fontWeight: 600,
                      }}
                    >
                      Your Performance <i className="fas fa-stopwatch-20" /> :
                      Above Average
                    </p>
                    <p
                      style={{
                        fontWeight: 400,
                        fontStyle: "normal",
                        fontSize: "large",
                      }}
                    >
                      {!this.state.isRated? 'Leave a Rating: ' : ''}
                      {!this.state.isRated? <ReactStars {...starDef} /> : ''}
                      
                    </p> */}
                  </div>
                  <div className="col-lg-1">
                    <div className="row">
                      {/* <button
                        type="button"
                        className="btn btn-sm"
                        style={{
                          backgroundColor: "white",
                          color: "#002C53",
                          border: "solid 1px #002C53",
                          fontWeight: 650
                        }}
                      >
                        Pause
                      </button>
                      &nbsp;&nbsp; */}

                      {/* ADD PROPS TO THIS */}
                      <a href={"/classroom/" + this.props.match.params.id}>
                        <button
                          type="button"
                          className="btn btn-sm"
                          style={{
                            backgroundColor: "#002C53",
                            color: "white",
                            fontWeight: 650,
                          }}
                        >
                          Resume Now
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="row"
            style={{
              padding: 100,
              paddingTop: 30,
              fontWeight: 400,
            }}
          >
            <div
              className="col-lg-9"
              style={{
                padding: 30,
                borderRadius: 20,
                border: "solid 1px #f0f0f0",
              }}
            >
              <h5 style={{ fontWeight: 800 }}>Topics in this Course</h5>
              <ol style={{ fontSize: 14, color: "#666666" }}>
                {this.state.course &&
                  this.state.course.topics.map((topic) => {
                    return <li>{topic}</li>;
                  })}
              </ol>
              <br />
              <h5 style={{ fontWeight: 800 }}>Description</h5>
              <p style={{ fontSize: 14, color: "#666666" }}>
                {this.state.course.description}
              </p>

              <br />
              <h5 style={{ fontWeight: 800 }}>Lectures and Videos</h5>
              <ul style={{ fontSize: 14, color: "#666666" }}>
                <li>
                  We are providing access of complete contents on course
                  starting date. If there are any topics which needs to be
                  discussed then we'll add more lectures to the course
                  accordingly.
                </li>
                <li>
                  There are In-Class Quizzes, Assignments, Notes along with
                  Lecture Videos in a lecture. You should attempt them all to
                  master each section that you study.
                </li>
                <li>
                  You should complete the lectures within the specified
                  deadlines.
                </li>
              </ul>
              <br />
              <h5 style={{ fontWeight: 800 }}>Quiz and Assignment</h5>
              <ul style={{ fontSize: 14, color: "#666666" }}>
                <li>
                  After almost every lecture there will be one Quiz/Assignment.
                </li>
                <li>
                  You can attempt a quiz any number of times as you like. To
                  complete the course you must complete 80% of the total
                  modules. A quiz will only be marked as completed if you have
                  passed it, i.e., scored more than or equal to 50% score.
                </li>
                <li>
                  You should complete the lectures within the specified
                  deadlines.
                </li>
              </ul>
            </div>
            <div className="col-lg-3">
              <div
                style={{
                  padding: 30,
                  borderRadius: 20,
                  border: "solid 1px #f0f0f0",
                  height: "fit-content",
                }}
              >
                <p
                  style={{
                    fontWeight: 800,
                    fontSize: "large",
                  }}
                >
                  Mentors
                </p>
                <hr />
                {this.state.course.authors != undefined &&
                  this.state.course.authors.map((author) => {
                    return (
                      <div className="mentor row" style={{ padding: 10 }}>
                        <div className="col-lg-3">
                          <img
                            src={author.imageurl}
                            style={{
                              borderRadius: "50%",
                              height: 50,
                              width: 50,
                            }}
                          />
                        </div>
                        <div className="col-lg-9">
                          <p
                            style={{
                              fontWeight: 500,
                            }}
                          >
                            {author.name}
                            <br />
                            <a href={"mailto:" + author.mail}>Send Email</a>
                          </p>
                        </div>
                      </div>
                    );
                  })}
              </div>
              <br />
              <div
                style={{
                  padding: 30,
                  borderRadius: 20,
                  border: "solid 1px #002C5366",
                  height: "fit-content",
                }}
              >
                <p
                  style={{
                    fontWeight: 800,
                    fontSize: "large",
                    color: "#002C53",
                  }}
                >
                  Certificate Request
                </p>
                <hr />
                <li>Complete 80% of your course</li>
                <li>Make sure your email is verified with us to generate certificate</li>
                <br/>
                <button
                  disabled={this.state.stats.percentage<0.8 || !this.state.user.isVerified}
                  title="Complete 80% of the course first"
                  type="button"
                  className="btn btn-sm"
                  style={{
                    backgroundColor: "#002C53",
                    color: "white",
                    fontWeight: 650,
                  }}
                  onClick={this.handleCertificateRequest}
                >
                  Request
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
