import React, { Component } from "react";
import Footer from "../partials/Footer";
import Header from "../partials/Header";

export default class UpdateCourse extends Component {
  render() {
    return (
      <div>
        <Header />
        <div
          className="row"
          style={{
            background: "#002C53",
            color: "beige",
            paddingTop: 30,
            fontSize: "large",
          }}
        >
          <div className="col-lg-2" />
          <div className="col-lg-8 p-5">
            <a href="/admin/dashboard">Go Back</a>
            <h1 style={{ color: "#BDE3FA" }}>Update Your Course</h1>
            <p style={{ fontSize: "small", color: "#eb5216" }}>
              Course Id: &lt;%=course.CID%&gt;
            </p>
            <form
              action="/update"
              method="POST"
              style={{ color: "beige", fontSize: "larger" }}
            >
              <div className="form-group">
                <label htmlFor="title">Course Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="form-control form-control-lg"
                  defaultValue="<%=course.Title%>"
                />
              </div>
              <div className="form-group">
                <label htmlFor="language">Language</label>
                <select
                  className="form-control form-control-lg"
                  id="language"
                  name="language"
                  value="<%=course.Language%>"
                >
                  <option value="English">English</option>
                  <option value="Hindi">Hindi</option>
                  <option value="Hinglish">Hinglish</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="imageurl">Cover Image</label>
                <input
                  type="text"
                  id="imageurl"
                  name="imageurl"
                  className="form-control form-control-lg"
                  defaultValue="<%=course.ImageURL%>"
                />
                <br />
                <img src="<%=course.ImageURL%>" style={{ width: 150 }} />
              </div>
              <div className="form-group">
                <label htmlFor="ivl">Introductory Video Link</label>
                <i>
                  <p style={{ fontSize: "x-small" }}>
                    This will be used to get a introudction of what the student
                    will learn from the course
                  </p>
                </i>
                <input
                  type="text"
                  id="ivl"
                  name="ivl"
                  className="form-control form-control-lg"
                  defaultValue="<%=course.IVL%>"
                />
              </div>
              <label htmlFor>Authors</label>
              <div className="form-group">
                <i>
                  <p style={{ fontSize: "x-small" }}>
                    Add # after name to write the email for ex: kapil
                    gupta#kapilgupta@gmail.com
                  </p>
                </i>
                <input
                  type="text"
                  id="auth1"
                  name="auth1"
                  className="form-control form-control-lg"
                  defaultValue="<%=course.auth[0]%>"
                />
              </div>
              <div className="form-group" id="auth2div">
                <input
                  type="text"
                  id="auth2"
                  name="auth2"
                  className="form-control form-control-lg"
                  defaultValue="<%=course.auth[1]%>"
                />
              </div>
              <div className="form-group" id="auth3div">
                <input
                  type="text"
                  id="auth3"
                  name="auth3"
                  className="form-control form-control-lg"
                  defaultValue="<%=course.auth[2]%>"
                />
              </div>
              <div className="form-group">
                <label htmlFor="in">Instructor's Note</label>
                <i>
                  <p style={{ fontSize: "x-small" }}>
                    This is a introductory note from the instructors about the
                    course and its overview.
                  </p>
                </i>
                <textarea
                  className="form-control"
                  aria-label="With textarea"
                  id="in"
                  name="in"
                  style={{ height: "min-content" }}
                  defaultValue={"<%=course.InstructorsNote%>"}
                />
              </div>
              <div className="form-group">
                <label htmlFor>Pre Requisites</label>
                <i>
                  <p style={{ fontSize: "x-small" }}>
                    Enter all the pre-requisites separated with comma
                  </p>
                </i>
                <input
                  type="text"
                  id="pre"
                  name="pre"
                  className="form-control form-control-lg"
                  defaultValue="<%=course.pre%>"
                />
              </div>
              <div className="form-group">
                <label htmlFor="bd">Brief Description</label>
                <i>
                  <p style={{ fontSize: "x-small" }}>
                    This is very important and will be used in with the course
                    card.
                  </p>
                </i>
                <textarea
                  className="form-control"
                  aria-label="With textarea"
                  id="bd"
                  name="bd"
                  defaultValue={"<%=course.BDescription%>"}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Complete Description</label>
                <i>
                  <p style={{ fontSize: "x-small" }}>
                    Describe the complete course here
                  </p>
                </i>
                <textarea
                  className="form-control"
                  aria-label="With textarea"
                  id="description"
                  name="description"
                  rows={5}
                  defaultValue={"<%=course.Description%>"}
                />
              </div>
              <div className="form-group">
                <label htmlFor="cd">Course Duration</label>
                <i>
                  <p style={{ fontSize: "x-small" }}>
                    Approximate time (in hrs) it will take to complete the
                    course
                  </p>
                </i>
                <input
                  type="number"
                  id="cd"
                  name="cd"
                  className="form-control form-control-lg"
                  defaultValue="<%=course.Duration%>"
                />
              </div>
              <strong>
                <p style={{ fontSize: "medium" }} />
              </strong>
              <div className="form-group">
                <label htmlFor="modules">Modules [Json Format*]</label>&nbsp;
                <button
                  className="btn btn-primary btn-sm"
                  style={{ backgroundColor: "#BDE3FA" }}
                  onclick="myFunction()"
                >
                  <i className="fas fa-copy" title="Copy Here" />
                </button>
                <strong>
                  <p style={{ fontSize: "small" }}>
                    This is a complex and Important step. Visit this
                    <a href="https://codeshare.io/21rYjB" target="blank">
                      link
                    </a>
                    , edit the json file and paste in the below given input box.
                  </p>
                </strong>
                <input
                  type="text"
                  id="modules"
                  name="modules"
                  className="form-control"
                  defaultValue="<%=course.Modules%>"
                />
              </div>
              <br />
              <br />
              <button
                type="submit"
                className="btn btn-primary btn-block btn-lg"
                style={{ backgroundColor: "#eb5216" }}
              >
                Save
              </button>
              <br />
            </form>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
