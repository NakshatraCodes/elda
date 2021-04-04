import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Axios from "axios";
import { Provider, atom } from "jotai";

import { Redirect } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Contact from "./components/Contact";
import Privacy from "./components/Privacy";
import Courseroom from "./components/Courseroom";
import Classroom from "./components/Classroom";
import Course from "./components/Course";
import Courses from "./components/Courses";
import Partners from "./components/Partners";
import About from "./components/About";
import Certificate from "./components/Certificate";
import ForgotPassword from "./components/ForgotPassword";
import RequestChangePassword from "./components/RequestChangePassword";
import Projects from "./components/Projects";

import { ProtectedRoute } from "./protectedRoute";
import { RedirectRoute } from "./RedirectRoute";

import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

require("dotenv").config();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Switch>
        <Provider>
          <Route exact path="/" component={Home} />
          <RedirectRoute path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <ProtectedRoute path="/courseroom/:id" component={Courseroom} />
          <ProtectedRoute path="/classroom/:id" component={Classroom} />
          <Route path="/certificate/:id" component={Certificate} />
          <ProtectedRoute path="/dashboard" component={Dashboard} />
          <Route path="/course/:id" component={Course} />
          <Route path="/contact" component={Contact} />
          <Route path="/courses" component={Courses} />
          <Route path="/partners" component={Partners} />
          <Route path="/projects" component={Projects} />
          <Route path="/about" component={About} />
          <Route path="/privacy-policy" component={Privacy} />
          <Route path="/forgotpass/:id" component={ForgotPassword} />
          <Route
            path="/requestpasswordchange"
            component={RequestChangePassword}
          />
        </Provider>
      </Switch>
    </Router>
  );
};

export default App;
