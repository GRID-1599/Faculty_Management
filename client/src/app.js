import React, { Component } from "react";
import ReactDOM from "react-dom";

import { library } from "@fortawesome/fontawesome-svg-core";

import { Routes, Route } from "react-router-dom";

// home page
import Homepage from "./components/homepage.js";

// logins
import LoginHome from "./components/login/home-login.js";
import AdminLogin from "./components/login/admin-login.js";
import UserLogin from "./components/login/user-login.js";

// registration
import UserRegistration from "./components/user/user-register.js";

// user
import UserMain from "./components/user/user-main";

// admin
import AdminMain from "./components/admin/admin-main";

class App extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.async = true;
    script.src = "";
    document.body.appendChild(script);
  }
  render() {
    return (
      <div className="app-main">
        {/* <HeaderTab/> */}
        <Routes>
          {/* <Route path="/login" element={<LoginHome/>} /> */}
          <Route path="" element={<Homepage />} />

          {/* log in */}

          <Route path="/faculty/login" element={<UserLogin />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/faculty/registration" element={<UserRegistration />} />

          {/* faculty pages */}
          <Route path="/faculty/*" element={<UserMain />} />

          {/* admin pages */}
          <Route path="/admin/*" element={<AdminMain />} />
        </Routes>
      </div>
    );
  }
}

export default App;
