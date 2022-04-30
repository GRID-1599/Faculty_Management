import React from "react";
import { Routes, Route } from "react-router-dom";
import SideNav from "./user-side-nav copy";
import TopNav from "./user-top-nav";

import UserHome from "./user-home.js";
import UserContact from "./user-contact";
import UserAddress from "./user-address.js";
import UserIssuedId from "./user-issuedID";
import UserElementary from "./user-elementary";
import UserJuniorHigh from "./user-junior-high";
import UserSeniorHigh from "./user-senior-high";
import UserVocational from "./user-vocational";
import UserCollege from "./user-college";
import UserGraduateStudies from "./user-graduate-studies";
import UserCivilServices from "./user-civil-services";
import UserWorkExp from "./user-work-experience";
import UserCertificates from "./user-certificates";

function UserMain(params) {
  return (
    <div className="user-home-main sb-nav-fixed">
      <TopNav />
      <div id="layoutSidenav">
        <SideNav />
        {/* CONTAINer */}
        <div id="layoutSidenav_content">
          <Routes>
            <Route path="" element={<UserHome />} exact />
            <Route path="profile" element={<UserHome />} />
            <Route path="contact" element={<UserContact />} />
            <Route path="address" element={<UserAddress />} />
            <Route path="issued-id" element={<UserIssuedId />} />
            {/* <Route path="issued-id"></Route> */}
            <Route path="elementary" element={<UserElementary />} />
            <Route path="junior-high" element={<UserJuniorHigh />} />
            <Route path="senior-high" element={<UserSeniorHigh />} />
            <Route path="vocational" element={<UserVocational />} />
            <Route path="college" element={<UserCollege />} />
            <Route path="graduate-studies" element={<UserGraduateStudies />} />

            <Route path="graduate-studies" element={<UserGraduateStudies />} />
            <Route path="graduate-studies" element={<UserGraduateStudies />} />

            <Route path="civil-services" element={<UserCivilServices />} />
            <Route path="work-experiences" element={<UserWorkExp />} />
            <Route path="certificates" element={<UserCertificates />} />
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
