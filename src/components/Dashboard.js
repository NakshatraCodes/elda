import Axios from "axios";
import React, { Component } from "react";
import Footer from "../partials/Footer";
import AuthHeader from "../partials/AuthHeader";
import banner from "../banner.jpg";
import { Line } from "react-chartjs-2";
import { withRouter } from "react-router-dom";

function formatDate(date) {
  var dd = date.getDate();
  var mm = date.getMonth() + 1;
  var yyyy = date.getFullYear();
  date = dd + "/" + mm + "/" + yyyy;
  return date;
}

function Last7Days() {
  var result = [];
  for (var i = 6; i >= 0; i--) {
    var d = new Date();
    d.setDate(d.getDate() - i);
    result.push(formatDate(d));
  }
  return result;
} 

var asd = {
  labels: Last7Days(),
  datasets: [
    {
      label: "Activities [Modules Completed]",
      fill: false,
      lineTension: 0.5,
      backgroundColor: "#f1f1f1",
      borderColor: "#002C53",
      borderWidth: 1,
      data:[]
    },
  ],
};

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuth: true,
      user: [],
      allCourses: [],
      enrolled: [],
      other: [],
      status: "",
      percentage: [],
      activities:""
    };
    this.verifyUser = this.verifyUser.bind(this);
    this.fetchActivity = this.fetchActivity.bind(this)
  }

  

  verifyUser(e) {
    e.preventDefault();
    Axios({
      method: "GET",
      withCredentials: true,
      url: "https://eldabackend.herokuapp.com/verify",
    }).then((res) => {
      console.log(res);
    });
    this.setState({
      status: "mailsent",
    });
  }

  componentDidMount() {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "https://eldabackend.herokuapp.com/dashboard",
    }).then((res) => {
      // Added layer of authentication, if dashboard is not accessible redirect to LOGIN
      //  Implement this in every protected route
      if (res.data.msg === "Authentication Not Done") {
        localStorage.removeItem("mooc-list");
        this.props.history.push({ pathname: "/login" });
      }
      // Add the above lines of code to all protected routes
      console.log(res.data.user);
      this.setState({
        user: res.data.user,
        allCourses: res.data.courses,
      });
      var enrolled = [],
        other = [];
      for (let i = 0; i < this.state.allCourses.length; i++) {
        if (this.state.user.courses.includes(this.state.allCourses[i]._id)) {
          enrolled.push(this.state.allCourses[i]);
        } else {
          other.push(this.state.allCourses[i]);
        }
      }
      this.setState({
        enrolled: enrolled,
        other: other,
      });
    });
    this.fetchActivity();
  }

  fetchActivity(){
    var days = Last7Days();
    var value = ""
    Axios({
        method: "POST",
        withCredentials: true,
        url: "https://eldabackend.herokuapp.com/activity",
        data: {
          days,
        },
      }).then((res) => {
        console.log(res.data.activities)
        value = res.data.activities;
        for(let i=0;i<value.length;i++)value[i]=parseInt(2*value[i]);
        this.setState({
          activities:value
        })
      })
  };



  render() {
    return (
      <div>
        <AuthHeader name={this.state.user.name} />
        <div
          className="alert alert-dismissible fade show"
          role="alert"
          style={{ padding: 0, border: "none", margin: 0 }}
        >
          <img src="http://bit.ly/admoocbanner" style={{ width: "100%" }} />
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        {this.state.user && !this.state.user.isVerified ? (
          <div
            className="alert alert-success alert-dismissible fade show"
            role="alert"
            style={{ margin: 0 }}
          >
            <strong>
              {this.state.status == "mailsent"
                ? "Check Your mail for the confirmation Mail. "
                : "Your account is not verified. "}
              <a href="#" onClick={this.verifyUser}>
                {this.state.status == "mailsent"
                  ? "Resend Mail"
                  : "Verify Now!"}
              </a>{" "}
              <i
                className="fas fa-exclamation-circle"
                title="Account Verification should be done in the first 30 days of your account otherwise your account will be locked!."
              />
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
        ) : (
          ""
        )}

        <div style={{ padding: 30, paddingLeft: 110, paddingRight: 110 }}>
          <div className="row">
            <div className="col-lg-5 col-md-12">
              <h4
                style={{
                  fontWeight: 800,
                  color: "#002C53",
                }}
              >
                Progress Report
              </h4>
              <br />
              <br />
              <Line
                data={ {
                  labels: Last7Days(),
                  datasets: [
                    {
                      label: "Activities [Modules Completed]",
                      fill: false,
                      lineTension: 0.5,
                      backgroundColor: "#f1f1f1",
                      borderColor: "#002C53",
                      borderWidth: 1,
                      data:this.state.activities
                    },
                  ],
                }}
                options={{
                  legend: {
                    display: true,
                    position: "bottom",
                  },
                }}
              />
            </div>
          </div>
          {this.state.enrolled != undefined &&
          this.state.enrolled.length > 0 ? (
            <div>
              <br />
              <br />
              <br />
              <h4
                style={{
                  fontWeight: 800,
                  color: "#002C53",
                }}
              >
                Continue Learning
              </h4>
              <br />
            </div>
          ) : (
            ""
          )}

          <div className="row">
            {this.state.enrolled != undefined &&
              this.state.enrolled.map((course) => {
                return (
                  <div className="col-lg-3 my-3">
                    <a
                      href={"/courseroom/" + course._id}
                      style={{ textDecoration: "none" }}
                    >
                      <div
                        className="card pubg mx-3"
                        style={{ width: "18rem" }}
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
                        </div>
                      </div>
                    </a>
                  </div>
                );
              })}
          </div>
          {this.state.other != undefined && this.state.other.length > 0 ? (
            <div>
              <br />
              <br />
              <br />
              <h4
                style={{
                  fontWeight: 800,
                  color: "#002C53",
                }}
              >
                Explore Courses
              </h4>
              <br />
            </div>
          ) : (
            ""
          )}
          <div className="row">
            {this.state.other != undefined &&
              this.state.other.map((course) => {
                return (
                  <div className="col-lg-3 my-4">
                    <a
                      href={"/course/" + course._id}
                      style={{ textDecoration: "none" }}
                    >
                      <div
                        className="card pubg mx-3"
                        style={{ width: "18rem" }}
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
                            &nbsp;&nbsp;Rating: {course.ratingValue}&nbsp;&nbsp;
                            <i className="fas fa-clock" />
                            &nbsp;&nbsp;{course.duration} hours
                          </p>
                          <p className="card-text" style={{ color: "#194374" }}>
                            {course.bdescription}
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                );
              })}
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default withRouter(Dashboard);
