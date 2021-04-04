import React, { Component } from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";

import AuthHeader2 from "../partials/AuthHeader2";
import auth from "../Auth";

export default class About extends Component {
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
        <div style={{ padding: 70 }}>
          <h4
            style={{
              fontWeight: 800,
              color: "#002C53",
            }}
          >
            About eLDA Lab
          </h4>
          <p>
            The e-LDA stands for E-Learning and Data Analytics Lab. e-LDA was founded at Indian Institute of Information Technology Kota
            in 2020. This lab largely focuses on development of Massive Open
            Online Courses (MOOCs) and learning analytic tools. Further, enhance
            the teaching-learning process with the application of data analytics
            and machine learning techniques on the digital data about college
            students as they learn online.<br/><br/>
              College education is an area of prime concern as it is crucial for making the youth of our country competitive and resourceful. In order to impart quality education and authentic knowledge to inculcate skill development amongst collegiate youth is the aim of the IIIT Kota, Government of Rajasthan and all the stakeholders involved in education.<br/><br/>
The reach and access to quality skill development education for all in a country can be ensured through technology enabled education modules and courses in the form of MOOCs (Massive Open Online Courses). The e- Learning and Data Analytics (eLDA) lab in Indian Institute of Information Technology Kota (IIIT Kota) along with the College Education Department, Rajasthan proposes to develop MOOCs for collegiate youth in order for them to acquire additional skills and enhance employability efficiency.
          </p>
          <br />
          <h4
            style={{
              fontWeight: 800,
              color: "#002C53",
            }}
          >
            Objectives of eLDA Lab
          </h4>
          <p>The primary aim of the e-Learning and Data Analytics lab is to develop Massive Open Online Courses on the unexplored topics that will be useful to increase the </p>
          <ul>
            <li>
            To provide quality education with equitable access to learners across India. 
            </li>
            <li>
            To enhance the skill set of collegiate youth through Skill Development Courses.
            </li>
            <li>
            To explore unexplored subject topics in MOOCs relevant to Indian learners based on Industry needs.
            </li>
            <li>
            To develop digital content for MOOCs on Skill development and vocational course contents.
            </li>
            <li>
            To enhance employability efficiency of college students through MOOCs.
            </li>
          </ul>
          <br />
          <h2
            style={{
              fontWeight: 800,
              color: "#002C53",
            }}
          >
            Team Members
          </h2>
          <br/><br/>
          <div className="container">
          <h4
            style={{
              fontWeight: 800,
              color: "#002C53",
            }}
          >
            Lab Coordinators
          </h4>
          <br/><br/>
          <div className="row">
              
              <div className="col-lg-6">
                  <center>
                  <div className="card" style={{ width: "18rem",borderRadius:"0 0 0 10%",borderTop:"none"}}>
                  <img src="https://i.imgur.com/JA2NHWk.jpg" className="card-img-top" style={{borderRadius:"0 10% 0 0"}} />
                  <div className="card-body">
                    <h5 className="card-title" style={{fontWeight:"700"}}>Dr. Basant Agarwal</h5>
                    <p className="card-text">
                    Lab coordinator
                    </p>
                  </div>
                </div>
              </center>
               
              </div>
              <div className="col-lg-6">
              <center>
              <div className="card" style={{ width: "18rem",borderRadius:"0 0 0 10%",borderTop:"none"}}>
                  <img src="https://imgur.com/PGlnAEY.jpg" className="card-img-top" style={{borderRadius:"0 10% 0 0"}} />
                  <div className="card-body">
                    <h5 className="card-title" style={{fontWeight:"700"}}>Dr. Priyanka Harjule</h5>
                    <p className="card-text">
                    Lab coordinator
                    </p>
                   
                  </div>
                </div>
              </center>
              </div>
            </div>
            <br /><br/><br/>
            <h4
            style={{
              fontWeight: 800,
              color: "#002C53",
            }}
          >
            Collaborators
          </h4>
          <br/><br/>
          <div className="row">
              
            <div className="col-lg-4">
                <center>
                <div className="card" style={{ width: "18rem",borderRadius:"0 0 0 10%",borderTop:"none"}}>
                <img src="https://cdn.csu.edu.au/__data/assets/image/0017/234512/Azizur-Rahman.jpg" className="card-img-top" style={{borderRadius:"0 10% 0 0"}} />
                <div className="card-body">
                  <h5 className="card-title" style={{fontWeight:"700"}}>Azizur Rahman</h5>
                  <p className="card-text">
                  Associate Professor<br/>Charles Sturt University, Australia
                  </p>
                </div>
              </div>
            </center>
             
            </div>
            <div className="col-lg-4">
            <center>
            <div className="card" style={{ width: "18rem",borderRadius:"0 0 0 10%",borderTop:"none"}}>
                <img src="https://i.ibb.co/FKR9MpN/Vladan-10-12-2015-JISA-Diskobolos-2015-recognition-1-768x1030.jpg" className="card-img-top" style={{borderRadius:"0 10% 0 0",height:"290px"}} />
                <div className="card-body">
                  <h5 className="card-title" style={{fontWeight:"700"}}>Vladan Devedzic</h5>
                  <p className="card-text">
                  Professor of Computer Science<br/>University of Belgrade, Serbia
                  </p>
                 
                </div>
              </div>
            </center>
            </div>
            <div className="col-lg-4">
              <center>
              <div className="card" style={{ width: "18rem",borderRadius:"0 0 0 10%",borderTop:"none"}}>
                  <img src="https://i.ibb.co/mzXRdKm/Whats-App-Image-2021-04-03-at-11-29-48-AM.jpg" className="card-img-top" style={{borderRadius:"0 10% 0 0",height:"290px"}} />
                  <div className="card-body">
                    <h5 className="card-title" style={{fontWeight:"700"}}>Danijela Milosevic</h5>
                    <p className="card-text">
                    <a href="http://badennet.net/en/partnership">BADEN Network</a>
                    <p>Serbia</p>
                    </p>
                   
                  </div>
                </div>
              </center>
              </div>
          </div>
          <br /><br/><br/>
          <h4
            style={{
              fontWeight: 800,
              color: "#002C53",
            }}
          >
            Students
          </h4>
          <br/><br/>
         
          <div className="row">
              
              <div className="col-lg-4">
                  <center>
                  <div className="card" style={{ width: "18rem",borderRadius:"0 0 0 10%",borderTop:"none"}}>
                  <img src="http://www.gravatar.com/avatar/d5db5ba75f13da9b6596be88e17cd479?d=retro&r=g&s=500" className="card-img-top" style={{borderRadius:"0 10% 0 0"}} />
                  <div className="card-body">
                    <h5 className="card-title" style={{fontWeight:"700"}}>Pavnesh Chaturvedi</h5>
                    <p className="card-text">
                    B.tech student<br/> IIIT Kota
                    </p>
                  </div>
                </div>
              </center>
               
              </div>
              <div className="col-lg-4">
              <center>
              <div className="card" style={{ width: "18rem",borderRadius:"0 0 0 10%",borderTop:"none"}}>
                  <img src="http://www.gravatar.com/avatar/69618c775ea3b940f5796e9089c89d82?d=retro&r=g&s=1000" className="card-img-top" style={{borderRadius:"0 10% 0 0"}} />
                  <div className="card-body">
                    <h5 className="card-title" style={{fontWeight:"700"}}>Vaibhav Jain</h5>
                    <p className="card-text">
                    B.tech student <br/>IIIT Kota
                    </p>
                   
                  </div>
                </div>
              </center>
              </div>
              <div className="col-lg-4">
              <center>
              <div className="card" style={{ width: "18rem",borderRadius:"0 0 0 10%",borderTop:"none"}}>
                  <img src="https://i.ibb.co/9bChy3J/vipin.jpg" className="card-img-top" style={{borderRadius:"0 10% 0 0",height:"285px"}} />
                  <div className="card-body">
                    <h5 className="card-title" style={{fontWeight:"700"}}>Vipin Tripathi</h5>
                    <p className="card-text">
                    B.tech student <br/>IIIT Kota
                    </p>
                   
                  </div>
                </div>
              </center>
              </div>
            </div>
            <br/>
            <br/>
            <div className="row">
            <div className="col-lg-4">
              <center>
              <div className="card" style={{ width: "18rem",borderRadius:"0 0 0 10%",borderTop:"none"}}>
                  <img src="https://i.ibb.co/2dZ1mjB/shivam.jpg" className="card-img-top" style={{borderRadius:"0 10% 0 0",height:"285px"}} />
                  <div className="card-body">
                    <h5 className="card-title" style={{fontWeight:"700"}}>Shivam</h5>
                    <p className="card-text">
                    B.tech student <br/>MNIT Jaipur
                    </p>
                   
                  </div>
                </div>
              </center>
              </div>
              <div className="col-lg-4">
              <center>
              <div className="card" style={{ width: "18rem",borderRadius:"0 0 0 10%",borderTop:"none"}}>
                  <img src="https://i.ibb.co/2h4TtBS/ajay-pic.jpg" className="card-img-top" style={{borderRadius:"0 10% 0 0",height:"285px"}} />
                  <div className="card-body">
                    <h5 className="card-title" style={{fontWeight:"700"}}>Ajay Agarwal</h5>
                    <p className="card-text">
                    B.tech student <br/>DIT University
                    </p>
                   
                  </div>
                </div>
              </center>
              </div>
              <div className="col-lg-4">
                  <center>
                  <div className="card" style={{ width: "18rem",borderRadius:"0 0 0 10%",borderTop:"none"}}>
                  <img src="https://i.ibb.co/pdhs6Fd/mayank-44b6f985.jpg" className="card-img-top" style={{borderRadius:"0 10% 0 0",height:"285px"}} />
                  <div className="card-body">
                    <h5 className="card-title" style={{fontWeight:"700"}}>Mayank Goyal</h5>
                    <p className="card-text">
                    B.tech student<br/> IIIT Kota
                    </p>
                  </div>
                </div>
              </center>
               
              </div>
             
            </div>
            <br/><br/><br/>
          </div>
          
        </div>

        <Footer />
      </div>
    );
  }
}
