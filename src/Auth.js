import Axios from "axios";

class Auth {
  constructor() {
    this.authenticated = false;
  }

  getUser(cb) {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "https://eldabackend.herokuapp.com/user",
    }).then((res) => {
      if (res.data.isAuthenticated) {
        cb(res.data.user);
      } else {
        cb(null);
      }
    });
  }

  login(data, cb) {
    const { loginEmail, loginPassword } = data;
    Axios({
      method: "POST",
      data: {
        mail: loginEmail,
        password: loginPassword,
      },
      withCredentials: true,
      url: "https://eldabackend.herokuapp.com/login",
    }).then((res) => {
      console.log(res.data);
      if (res.data.msg === "Successfully Authenticated") {
        const { _id } = res.data.user;
        localStorage.setItem("mooc-list", _id);
        cb();
      } else {
        cb();
      }
    });
  }

  logout(cb) {
    Axios({
      method: "POST",
      withCredentials: true,
      url: "https://eldabackend.herokuapp.com/logout",
    }).then((res) => {
      console.log(res.data);
      localStorage.removeItem("mooc-list");
    });
    cb();
  }

  isAuthenticated() {
    if (localStorage.getItem("mooc-list")) {
      return true;
    } else {
      return false;
    }
  }
}

export default new Auth();
