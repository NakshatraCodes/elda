import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import { Redirect } from "react-router";

function Register() {
  const history = useHistory();
  const [registerFullname, setRegisterFullname] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerPhone, setRegisterPhone] = useState("");
  const [registerState, setRegisterState] = useState("");
  const [registerCollege, setRegisterCollege] = useState("");
  const [user, setUser] = useState();

  const register = (e) => {
    e.preventDefault();
    Axios({
      method: "POST",
      data: {
        student: {
          name: registerFullname,
          mail: registerEmail,
          password: registerPassword,
          phone: registerPhone,
          college: registerCollege,
          state: registerState,
        },
      },
      withCredentials: true,
      url: "https://eldabackend.herokuapp.com/register",
    }).then((res) => {
      console.log(res.data);
      if (res.data.token == 101) {
        history.push("/login");
      } else {
        history.push("/dashboard");
      }
    });
  };

  return (
    <div>
      <Header />
      <div className="row" style={{ backgroundColor: "#002C53", padding: 40 }}>
        <div className="col-lg-1" />
        <div className="col-lg-4" style={{ color: "#BDE3FA", paddingTop: 40 }}>
          <h1>Register Now</h1>
          
          <h2 style={{ color: "#eb5216" }}>100% Online and Secure</h2>
          <h5>
            We make sure that everything is smooth from backend to frontend. So
            that you enjoy a seemless experience.
          </h5>
          <br />
          <h2 style={{ color: "#eb5216" }}>Learn at your pace</h2>
          <h5>
            We believe in learning at your own pace makes the learning easy.
          </h5>
          <br />
          <h2 style={{ color: "#eb5216" }}>Professional Certificate</h2>
          <h5>
            Whether you’re looking to start a new career, Professional
            Certificates help you become job-ready
          </h5>
          <br />
          <h2 style={{ color: "#eb5216" }}>Academic and technical support</h2>
          <h5>We make sure that your every query/doubt is resolved.</h5>
          <br />
        </div>
        <div className="col-lg-2" />
        <div className="col-lg-3">
          <form
            onSubmit={register}
            style={{ color: "beige", paddingTop: 50, fontSize: "large" }}
          >
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control form-control-lg"
                onChange={(e) => setRegisterFullname(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control form-control-lg"
                onChange={(e) => setRegisterEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="number"
                id="phone"
                name="phone"
                className="form-control form-control-lg"
                onChange={(e) => setRegisterPhone(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="state">State</label>
              <select
                className="form-control form-control-lg"
                id="state"
                name="state"
                onChange={(e) => setRegisterState(e.target.value)}
              >
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Andaman and Nicobar Islands">
                  Andaman and Nicobar Islands
                </option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Dadar and Nagar Haveli">
                  Dadar and Nagar Haveli
                </option>
                <option value="Daman and Diu">Daman and Diu</option>
                <option value="Delhi">Delhi</option>
                <option value="Lakshadweep">Lakshadweep</option>
                <option value="Puducherry">Puducherry</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                name="city"
                className="form-control form-control-lg"
                // onChange={(e) => setRegisterCollege(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="college">School/College</label>
              <input
                type="text"
                id="college"
                name="college"
                className="form-control form-control-lg"
                onChange={(e) => setRegisterCollege(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="college">Department</label>
              <select
                className="form-control form-control-lg"
                id="qual"
                name="qual"
                // onChange={(e) => setRegisterState(e.target.value)}
              >
                <option value="Arts">Arts</option>
                <option value="Commerce">
                  Commerce
                </option>
                <option value="Science">
                  Science
                </option>
                <option value="Other">
                  Other
                </option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="college">Qualification/Pursing</label>
              <select
                className="form-control form-control-lg"
                id="qual"
                name="qual"
                // onChange={(e) => setRegisterState(e.target.value)}
              >
                <option value="High School">High School</option>
                <option value="Under Graduate">
                  Under Graduate
                </option>
                <option value="Post Graduate">
                  Post Graduate
                </option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-control form-control-lg"
                onChange={(e) => setRegisterPassword(e.target.value)}
              />
            </div>
            {/* <div className="form-group">
              <label htmlFor="cpassword">Confirm Password</label>
              <input
                type="password"
                id="cpassword"
                name="cpassword"
                className="form-control form-control-lg"
              />
            </div> */}
            <p style={{fontStyle:"italic",color:"#ffffff"}}>!! Make Sure the information you enter is correct and valid. Because the same will be used to print certificates and documents.</p>
          <br />
            <button
              type="submit"
              className="btn btn-primary btn-block btn-lg"
              style={{ backgroundColor: "#eb5216" }}
            >
              Register
            </button>
            <br />
            <i>
              <center>
                <a href="/login" style={{ color: "#eb5216" }}>
                  <h5>Already Registered? Login</h5>
                </a>
              </center>
            </i>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Register;
