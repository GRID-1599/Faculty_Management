import React from "react";
import { Routes, Route } from "react-router-dom";
import SideNav from "./user-side-nav";
import TopNav from "./user-top-nav";

import UserHome from "./user-home.js";
import UserAddress from "./user-address.js";
import UserIssuedId from "./user-issuedID";
import UserElementary from "./user-elementary";
import UserJuniorHigh from "./user-junior-high";
import UserSeniorHigh from "./user-senior-high";
import UserVocational from "./user-vocational";
import UserCollege from "./user-college";
import UserGraduateStudies from "./user-graduate-studies";

function UserMain(params) {
  return (
    <div className="user-home-main sb-nav-fixed">
      <TopNav />
      <div id="layoutSidenav">
        <SideNav />
        {/* CONTAINer */}
        <div id="layoutSidenav_content">
          <Routes>
            <Route path="" element={<UserHome />} />
            <Route path="/faculty/address" element={<UserAddress />} />
            <Route path="/faculty/issued-id" element={<UserIssuedId />} />
            <Route path="/faculty/elementary" element={<UserElementary />} />
            <Route path="/faculty/junior-high" element={<UserJuniorHigh />} />
            <Route path="/faculty/senior-high" element={<UserSeniorHigh />} />
            <Route path="/faculty/vocational" element={<UserVocational />} />
            <Route path="/faculty/college" element={<UserCollege />} />
            <Route
              path="/faculty/graduate-studies"
              element={<UserGraduateStudies />}
            />
            <Route
              path="/faculty/graduate-studies"
              element={<UserGraduateStudies />}
            />
          </Routes>
          <footer className="py-4 bg-light mt-auto">
            <div className="container-fluid px-4">
              <div className="d-flex align-items-center justify-content-between small">
                <div className="text-muted">Sample Footer</div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default UserMain;
