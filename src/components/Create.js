import React, { Component } from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";

export default class Create extends Component {
  render() {
    return (
      <div>
        <Header />
        <div
          className="row"
          style={{
            backgroundColor: "#002c53",
            padding: 40,
            paddingBottom: 100,
            marginLeft: 0,
          }}
        >
          <div className="col-lg-5 leftsec" style={{ color: "#bde3fa" }}>
            <h1>Create New Course</h1>
            <br />
            <h4 style={{ color: "#eb5216" }}>
              Make sure you have the following resources ready :
            </h4>
            <br />
            <h5>
              <ul>
                <li>
                  <b>Introductory Video</b> This video will be an introduction
                  to your course and the topics taught in the same.
                </li>
                <br />
                <li>
                  <b>Cover Image</b> Open this link to edit a predesigned
                  <a href="" target="_blank">
                    template
                  </a>{" "}
                  and download the image. Generate a Image URL{" "}
                  <a href="" target="_blank">
                    from here
                  </a>{" "}
                  by uploading the same.
                </li>
                <br />
                <li>
                  <b>Course Desciption</b> This is the most important section
                  where students can overview the complete course and its
                  details. Make sure the desciption is error-proof and easy to
                  understand.
                </li>
                <br />
                <li>
                  <b>Modules</b> This is the section where you will make a JSON
                  format of your complete course including all the videos,
                  quizzes and modules.
                </li>
                <br />
                <li>
                  <b>Watched this Video</b> Watch the below video to saw a
                  preview of how you can create a course.
                </li>
                <br />
              </ul>
            </h5>
            <br />
            <center>
<iframe
  width="450"
  height="240"
  src="https://www.youtube.com/embed/oeqfFF94Y74"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>
    </center>
          </div>
          <div className="col-lg-1" />
          <div className="col-lg-5">
            <form
              action="/create"
              method="POST"
              style={{ color: "beige", paddingTop: 50, fontSize: "larger" }}
            >
              <div id="simple">
                <div className="form-group">
                  <label htmlFor="title">Course Title</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    className="form-control form-control-lg"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="language">Language</label>
                  <select
                    className="form-control form-control-lg"
                    id="language"
                    name="language"
                  >
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                    <option value="Hinglish">Hinglish</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="imageurl">
                    Cover Image <i>(Link)</i>
                  </label>
                  <input
                    type="text"
                    id="imageurl"
                    name="imageurl"
                    className="form-control form-control-lg"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="ivl">Introductory Video Link</label>
                  <i>
                    <p style={{ fontSize: "x-small" }}>
                      This will be used to get a introudction of what the
                      student will learn from the course
                    </p>
                  </i>
                  <input
                    type="text"
                    id="ivl"
                    name="ivl"
                    className="form-control form-control-lg"
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
                    placeholder="name#email"
                  />
                </div>
                <div className="btn btn-success btn-sm" id="auth2add">
                  Add More Author <i className="fas fa-plus-square" />
                </div>
                <div
                  className="form-group"
                  id="auth2div"
                  style={{ display: "none" }}
                >
                  <i>
                    <p style={{ fontSize: "x-small" }}>
                      Add # after name to write the email for ex: kapil
                      gupta#kapilgupta@gmail.com
                    </p>
                  </i>
                  <input
                    type="text"
                    id="auth2"
                    name="auth2"
                    className="form-control form-control-lg"
                    placeholder="name#email"
                  />
                </div>
                <div
                  className="btn btn-success btn-sm"
                  id="auth3add"
                  style={{ display: "none" }}
                >
                  Add More Author <i className="fas fa-plus-square" />
                </div>
                <div
                  className="form-group"
                  id="auth3div"
                  style={{ display: "none" }}
                >
                  <i>
                    <p style={{ fontSize: "x-small" }}>
                      Add # after name to write the email for ex: kapil
                      gupta#kapilgupta@gmail.com
                    </p>
                  </i>
                  <input
                    type="text"
                    id="auth3"
                    name="auth3"
                    className="form-control form-control-lg"
                    placeholder="name#email"
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
                    id="inote"
                    name="inote"
                    defaultValue={""}
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
                    id="pr"
                    name="pr"
                    className="form-control form-control-lg"
                    placeholder="html,css,javascript"
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
                    defaultValue={""}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="des">Complete Description</label>
                  <i>
                    <p style={{ fontSize: "x-small" }}>
                      Describe the complete course here
                    </p>
                  </i>
                  <textarea
                    className="form-control"
                    aria-label="With textarea"
                    id="des"
                    name="des"
                    rows={5}
                    defaultValue={""}
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
                  />
                </div>
                <strong>
                  <p style={{ fontSize: "medium" }}>
                    This is a complex and Important step. Visit this
                    <a href="https://codeshare.io/21rYjB" target="blank">
                      link
                    </a>
                    , edit the json file and paste in the below given input box.
                  </p>
                </strong>
                <div className="form-group">
                  <label htmlFor="mod">Modules [Json Format*]</label>
                  <input
                    type="text"
                    id="mod"
                    name="mod"
                    className="form-control form-control-lg"
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  style={{ backgroundColor: "#eb5216" }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
