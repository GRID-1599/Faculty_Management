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

import HeaderTab from "./components/header.js";

// user
import UserMain from "./components/user/user-main";
import UserHome from "./components/user/user-home.js";
import UserContact from "./components/user/user-contact";
import UserAddress from "./components/user/user-address.js";
import UserIssuedId from "./components/user/user-issuedID";
import UserElementary from "./components/user/user-elementary";
import UserJuniorHigh from "./components/user/user-junior-high";
import UserSeniorHigh from "./components/user/user-senior-high";
import UserVocational from "./components/user/user-vocational";
import UserCollege from "./components/user/user-college";
import UserGraduateStudies from "./components/user/user-graduate-studies";
import UserCivilServices from "./components/user/user-civil-services";
import UserWorkExp from "./components/user/user-work-experience";
import UserCertificates from "./components/user/user-certificates";

// admin
import AdminHome from "./components/admin/admin-home.js";

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

          {/* pages */}
          {/* faculty pages */}
          <Route path="/faculty/*" element={<UserMain />} />
          {/*<Route path="/faculty/address" element={<UserAddress />} />
          <Route path="/faculty/contact" element={<UserContact />} />
          <Route path="/faculty/issued-id" element={<UserIssuedId />} />
          <Route path="/faculty/elementary" element={<UserElementary />} />
          <Route path="/faculty/junior-high" element={<UserJuniorHigh />} />
          <Route path="/faculty/senior-high" element={<UserSeniorHigh />} />
          <Route path="/faculty/vocational" element={<UserVocational />} />
          <Route path="/faculty/college" element={<UserCollege />} /> */}

          {/* <Route
            path="/faculty/graduate-studies"
            element={<UserGraduateStudies />}
          />
          <Route
            path="/faculty/graduate-studies"
            element={<UserGraduateStudies />}
          />

          <Route
            path="/faculty/civil-services"
            element={<UserCivilServices />}
          />
          <Route path="/faculty/work-experiences" element={<UserWorkExp />} />
          <Route path="/faculty/certificates" element={<UserCertificates />} /> */}

          {/* admin pages */}
          <Route path="/admin" element={<AdminHome />} />
        </Routes>
      </div>
    );
  }
}

export default App;
