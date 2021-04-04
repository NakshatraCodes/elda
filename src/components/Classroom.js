import Axios from "axios";
import React, { Component } from "react";
import AuthHeader2 from "../partials/AuthHeader2";
import { animateScroll as scroll} from 'react-scroll'
import Collapsible from 'react-collapsible';

export default class Classroom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modules: "",
      status: "",
      current: {
        _id: "",
      },
      user: "",
      completed: "",
      selected: [],
      pfstatus: "blank",
      score: 0,
      attempt:3
    };
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleWeek = this.handleWeek.bind(this);
    this.handleVideo = this.handleVideo.bind(this);
    this.handleQuiz = this.handleQuiz.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleQuestion = this.handleQuestion.bind(this);
  }

  handleClick1(e) {
    e.preventDefault();
    console.log(e.target.id);
    var url = "https://eldabackend.herokuapp.com/course/video/" + e.target.id;
    Axios({
      method: "GET",
      withCredentials: true,
      url: url,
    }).then((res) => {
      console.log(res.data);
      this.setState({
        current: res.data.video,
        status: "video",
        pfstatus: "blank",
      });
    });
  }

  handleClick2(e) {
    e.preventDefault();
    console.log(e.target.id);
    var url = "https://eldabackend.herokuapp.com/course/quiz/" + e.target.id;
    Axios({
      method: "GET",
      withCredentials: true,
      url: url,
    }).then((res) => {
      console.log(res.data);
      // check if given danjknsfjdfskngjgse

      this.setState({
        current: res.data.quiz,
        status: "quiz",
        pfstatus: "blank",
      });
    });
  }

  handleVideo(e) {
    var course_id = this.props.match.params.id;
    var url = "https://eldabackend.herokuapp.com/course/video/completed/" + course_id+"/"+e.target.id;
    Axios({
      method: "GET",
      withCredentials: true,
      url: url,
    }).then((res) => {
      this.handleChange();
    });
    scroll.scrollToTop();
  }

  handleQuiz(e) {
    var count = this.state.current.questions.length;
    var responses = [];
    let flg = 0;
    for (let i = 1; i <= count; i++) {
      var id = e.target.id + "" + i;
      flg = 0;
      for (let j = 0; j < this.state.selected.length; j++) {
        if (this.state.selected[j].id == id) {
          responses.push(this.state.selected[j].option);
          flg = 1;
        }
      }
      if (flg == 0) responses.push("0");
    }

    console.log(responses);
    var course_id = this.props.match.params.id;
    var url = "https://eldabackend.herokuapp.com/course/quiz/completed/" + e.target.id;
    Axios({
      method: "POST",
      data: {
        responses,
        course_id
      },
      withCredentials: true,
      url: url,
    }).then((res) => {
      console.log(res.data);
      if (res.data.token == "1234") {
        // Fail
        console.log("Fail");
        this.setState({
          pfstatus: "fail",
          score: res.data.score,
          attempt:res.data.attempt
        });
      } else if (res.data.token == "1111") {
        // Pass
        console.log("Passed");
        this.setState({
          pfstatus: "pass",
          score: res.data.score,
          answers: res.data.answers,
        });
        this.componentDidMount();
      } else if(res.data.token=="4444") {
        // No Attempts Left
        this.setState({
          pfstatus: "noatp"
        });
      }else{
        // Error
        console.log("Error");
        this.setState({
          pfstatus: "error",
        });
      }
      this.componentDidMount();
    });
    scroll.scrollToTop();
  }

  handleQuestion(e) {
    console.log(e.target.value);
    var oa = this.state.selected;
    var c = 0;
    for (let i = 0; i < oa.length; i++) {
      if (oa[i].id == e.target.id) {
        oa[i].option = e.target.value;
        c = 1;
        break;
      }
    }
    if (c == 0) {
      var option = { id: e.target.id, option: e.target.value };
      oa.push(option);
    }
    this.setState({
      selected: oa,
    });
  }

  handleChange() {
    var url = "https://eldabackend.herokuapp.com/classroom/" + this.props.match.params.id;
    Axios({
      method: "GET",
      withCredentials: true,
      url: url,
    }).then((res) => {
      console.log(res.data);
      this.setState({
        completed: res.data.completed,
      });
    });
  }

  handleWeek(e) {
    // Incomplete
    e.preventDefault();
    console.log(e.target.id);
  }

  componentDidMount() {
    // Course Content course id from props
    var course_id = this.props.match.params.id;
    var url = "https://eldabackend.herokuapp.com/classroom/" + this.props.match.params.id;
    Axios({
      method: "GET",
      withCredentials: true,
      url: url,
    }).then((res) => {
      if (res.data.msg === "Authentication Not Done") {
        localStorage.removeItem("mooc-list");
        this.props.history.push({ pathname: "/login" });
      }
      console.log(res.data);
      this.setState({
        modules: res.data.modules,
        completed: res.data.completed,
      });
    });

    Axios({
      method: "GET",
      withCredentials: true,
      url: "https://eldabackend.herokuapp.com/courseroom/" + this.props.match.params.id,
    }).then((res) => {
      this.setState({
        user: res.data.user,
      });
    });
  }
  index = 0;
  ind1 = 0;
  render() {
    return (
      <div>
        <AuthHeader2 />
        <div className="row">

          <div
            className="col-lg-3"
            style={{
              height: "calc(100% - 200px)",
              borderRight: "1px solid #E8F6F5",
              position: "fixed",
              overflowY: "scroll",
              background:"#FAFAFA",
              paddingLeft:"30px",
              paddingRight:"40px"
            }}
          >
            
            <p style={{fontSize:0}}>{this.ind1=0}</p>
            {this.state.modules &&
              this.state.modules.map((week) => {
                return (
                  <div style={{textAlign:"left",fontWeight:700}} >
                  <p style={{fontSize:0}}>{this.ind1+=1}</p>
                  {/* "Week #"+this.ind1+" "+ */}
                   <Collapsible trigger={week[0].name+" 🔽"}>
                      {/* <h5 style={{ color: "#3E428D", fontWeight: 800 }}>
                        Week #{this.ind1+=1}&nbsp;{week[0].name} <i class="fas fa-caret-down"></i>
                      </h5>{" "} */}
                    <div className="my-1" style={{textAlign:"left"}} id={this.index}>
                      {week.map((itm) => {
                        if (itm.type != "meta") {
                          if (itm.type == "video") {
                            return (
                              <div>
                                <button
                                className="btn"
                                  onClick={this.handleClick1}
                                  id={itm.module_id}
                                  style={{
                                    borderBottom: "0.01px solid #E8F6F5",
                                    background: "#ffffff00",
                                    color: "#002C53",
                                    fontSize: 15,
                                    textAlign:"left",
                                    width:"100%"
                                  }}
                                >
                                   <i class="fas fa-film"></i> {itm.name}
                                </button>
                              </div>
                            );
                          } else {
                            return (
                              <div>
                                
                                <button
                                className="btn"
                                  onClick={this.handleClick2}
                                  id={itm.module_id}
                                  style={{
                                    borderBottom: "1px solid #E8F6F5",
                                    background: "#ffffff00",
                                    color: "#37C6F4",
                                    fontSize: 15,
                                    textAlign:"left",
                                    width:"100%"
                                  }}
                                >
                                  <i class="far fa-question-circle"></i> Quiz
                                 
                                </button>
                              </div>
                            );
                          }
                        }
                      })}
                    </div>
                    </Collapsible>
                  </div>
                );
              })}
          </div>
          <div className="col-lg-9" style={{ left: 450 }}>
            {this.state.current &&
            this.state.status == "quiz" &&
            this.state.completed.includes(this.state.current._id)
              ? "You have already given and passed this quiz!"
              : ""}
            {this.state.pfstatus == "pass" && (
              <div>
                <div
                  className="alert alert-success alert-dismissible fade show my-3"
                  role="alert"
                >
                  <strong>
                    Congratulations! You have passed the quiz. You have scored{" "}
                    {(this.state.score * 100).toFixed(2)}% perecentile.
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
                <p style={{ fontWeight: 700 }}>
                  Following is the answer key for the same! {this.state.answers}
                </p>
              </div>
            )}
            {this.state.pfstatus == "fail" && (
              <div
                className="alert alert-warning alert-dismissible fade show my-3"
                role="alert"
              >
                <strong>
                  You have failed the quiz with {(this.state.score * 100).toFixed(2)}% perecentile. You have {3-this.state.attempt} attempts left!
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
            {this.state.pfstatus == "error" && (
              <div
                className="alert alert-primary alert-dismissible fade show my-3"
                role="alert"
              >
                <strong>There is some error while submitting the quiz</strong>
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
             {this.state.pfstatus == "noatp" && (
              <div
                className="alert alert-danger alert-dismissible fade show my-3"
                role="alert"
                style={{marginRight:100}}
              >
                <strong>Sorry No attempts are left! You cannot submit this!</strong>
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
            {this.state.current && this.state.status == "quiz" && <h1 style={{fontWeight:800}}>Quiz</h1>}
            <p style={{ fontSize: 0 }}>{(this.index = 0)}</p>
            <div id={this.state.status == "quiz" && this.state.current._id}>
              {this.state.current &&
                this.state.status == "quiz" &&
                this.state.current.questions.map((que) => {
                  return (
                    <div>
                      <strong>
                        <p>
                          {(this.index = this.index + 1)}. {que.question}
                        </p>
                      </strong>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="">
                            <label
                              className="form-check-label"
                              htmlFor={this.state.current._id + "" + this.index}
                              value="1"
                            >
                              A. {que.options[0]}
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="">
                            <label
                              className="form-check-label"
                              htmlFor={this.state.current._id + "" + this.index}
                              value="1"
                            >
                              B. {que.options[1]}
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="">
                            <label
                              className="form-check-label"
                              htmlFor={this.state.current._id + "" + this.index}
                              value="1"
                            >
                              C. {que.options[2]}
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="">
                            <label
                              className="form-check-label"
                              htmlFor={this.state.current._id + "" + this.index}
                              value="1"
                            >
                              D. {que.options[3]}
                            </label>
                          </div>
                        </div>
                        <select
                          id={this.state.current._id + "" + this.index}
                          onChange={this.handleQuestion}
                          className="form-select form-select-sm w-10 h-25 m-3"
                          aria-label="Default select example"
                        >
                          <option value={0} selected>
                            Select the answer
                          </option>
                          <option value={1}>A</option>
                          <option value={2}>B</option>
                          <option value={3}>C</option>
                          <option value={4}>D</option>
                        </select>
                      </div>
                      <br />
                      <br />
                    </div>
                  );
                })}
              {this.state.current && this.state.status == "quiz" && (
                <button
                  className="btn btn-primary my-3"
                  id={this.state.current._id}
                  onClick={this.handleQuiz}
                  disabled={this.state.completed.includes(
                    this.state.current._id
                  )}
                >
                  Submit
                </button>
              )}
            </div>
            {this.state.current && this.state.status == "video" && (
              <div>
                <h3 style={{fontWeight:800}}>{this.state.current.name}</h3>
                <iframe
                  width="85%"
                  height={500}
                  src={`https://www.youtube.com/embed/${this.state.current.videourl}`}
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <br/>
                <button
                  disabled={this.state.completed.includes(
                    this.state.current._id
                  )}
                  onClick={this.handleVideo}
                  className="btn btn-primary btn-sm my-3"
                  id={this.state.current._id}
                >
                  {this.state.completed.includes(this.state.current._id)
                    ? "Already Completed"
                    : "Mark As Completed"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
