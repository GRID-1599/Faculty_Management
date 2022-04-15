import React from "react";

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
import UserHome from "./components/user/user-home.js";
import UserAddress from "./components/user/user-address.js";
import UserIssuedId from "./components/user/user-issuedID";

// admin
import AdminHome from "./components/admin/admin-home.js";

function App() {
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
        <Route path="/faculty" element={<UserHome />} />
        <Route path="/faculty/address" element={<UserAddress />} />
        <Route path="/faculty/issued-id" element={<UserIssuedId />} />

        {/* admin pages */}
        <Route path="/admin" element={<AdminHome />} />
      </Routes>
    </div>
  );
}

export default App;
