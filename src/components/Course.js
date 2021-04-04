import React, { Component } from "react";
import Axios from "axios";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import YouTube from "react-youtube";
import AuthHeader from "../partials/AuthHeader";
import auth from "../Auth";

import { animateScroll as scroll} from 'react-scroll'

export default class Course extends Component {
  constructor(props) {
    super(props);
    this.state = {
      course: "",
      url: "",
      msg: "",
    };
    this.handleEnroll = this.handleEnroll.bind(this);
    this.renderHeader = this.renderHeader.bind(this);
  }

  componentDidMount() {
    this.setState({
      url: "https://eldabackend.herokuapp.com/course/" + this.props.match.params.id,
    });
    Axios({
      method: "GET",
      withCredentials: true,
      url: "https://eldabackend.herokuapp.com/course/" + this.props.match.params.id,
    })
      .then((res) => {
        console.log(res.data.course[0]);
        this.setState({
          course: res.data.course[0],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleEnroll() {
    console.log("hello");
    Axios({
      method: "GET",
      withCredentials: true,
      url: "https://eldabackend.herokuapp.com/enroll/" + this.state.course._id,
    })
      .then((res) => {
        var token = res.data.token;
        if (token == "102") {
          this.setState({
            msg: "User is not Authenticated!",
          });
        } else if (token == "1111") {
          this.setState({
            msg: "You are already enrolled in this course.",
          });
        } else if (token == "1112") {
          this.setState({
            msg: "No such course exists!",
          });
        } else {
          this.setState({
            msg: "Succesfully Enrolled in the Course.",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
      scroll.scrollToTop();
  }

  renderHeader() {
    if (auth.isAuthenticated()) {
      return <AuthHeader />;
    } else {
      return <Header />;
    }
  }

  render() {
    const opts = {
      height: "400",
      width: "650",
      rel: "0",
    };

    return (
      <div>
        {/* check if auth or not then AuthHeader otherwise Header2 */}
        {this.renderHeader()}
        {this.state.msg != "" ? (
          <div
            className="alert alert-warning alert-dismissible fade show my-3"
            role="alert"
          >
            <strong>{this.state.msg}</strong>
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
        <div style={{ backgroundColor: "#FBFEFF" }}>
          <div className="row" style={{ padding: 80 }}>
            <div className="col-lg-6">
              {auth.isAuthenticated()?<a href="/dashboard">Go Back</a>:<a href="/">Go Back Home</a>}
                
              
              <h3 style={{fontWeight:800}}>{this.state.course.title}</h3>
              <br />
              <p style={{ color: "#002C53" }}>
                <i className="fas fa-globe-asia" />
                &nbsp;&nbsp;{this.state.course.language}&nbsp;&nbsp;
                <i className="fas fa-certificate" />
                &nbsp;&nbsp;Course Certificate&nbsp;&nbsp;
                <i className="fas fa-star" />
                &nbsp;&nbsp;Rating: {this.state.course.ratingValue}&nbsp;&nbsp;
                <i className="fas fa-clock" />
                &nbsp;&nbsp;{this.state.course.duration} hours
              </p>
              <br />
              <p>
                {this.state.course.bdescription}
              </p>
              
              <p />
              <br />
              <button
                type="button"
                className="btn btn-lg"
                style={{ backgroundColor: "#002C53", color: "white" ,fontWeight:800}}
                onClick={this.handleEnroll}
                disabled={this.state.course.comingsoon}
              >
                {!this.state.course.comingsoon?"Enroll for Free!":"Coming Soon"}
              </button>
            </div>
            <div className="col-lg-4">
              <YouTube videoId={this.state.course.ivl} opts={opts} rel="0" />
            </div>
          </div>
          <div className style={{ padding: 80 }}>
            <h3 style={{fontWeight:800}}>Description</h3>
            <p>{this.state.course.description}</p>
            <br />
            <h3 style={{fontWeight:800}}>Topics you'll learn:</h3>
              <ul>
                {this.state.course &&
                  this.state.course.topics.map((topic) => {
                    return <li>{topic}</li>;
                  })}
              </ul>
            <h3 style={{fontWeight:800}}>PreRequisites</h3>
            <ul>
              {this.state.course.pr != undefined &&
                this.state.course.pr.map((val) => {
                  return <li>{val}</li>;
                })}
            </ul>
            <br />
            <h3 style={{fontWeight:800}}>Instructors</h3>
            <div className="row">

            
            {this.state.course.authors != undefined &&
              this.state.course.authors.map((author) => {
                return (
                  <div className="col-lg-2 card mx-2 my-2"  
                    href={"mailto:" + author.mail}
                  >
                    <img src={author.imageurl} className="card-img-top" alt="..." style={{height:180}} />
                    <div className="card-body">
                    <h6>{author.name}</h6>
                      <p className="card-text">{author.description}</p>
                    </div>
                    
                  </div>
                );
              })}
              </div><br/>
            <h3 style={{fontWeight:800}}>Instructor's Note</h3>
            <p>{this.state.course.inote}</p>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
