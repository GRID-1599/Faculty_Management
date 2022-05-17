import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
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
import UserChangePassword from "./user-password_change";

import Axios from "axios";

function UserMain(params) {
  const navigate = useNavigate();

  // const [listFaculty, setListFaculty] = useState([]);
  // const [objFaculty, setObjFaculty] = useState();
  // var employeeId = "123456";
  const [employeeId, setEmployeeId] = useState("");
  const [toRender, setToRender] = useState(false);

  useEffect(() => {
    var theUser = sessionStorage.getItem("user");
    // console.log(theUser);
    if (theUser !== null) {
      Axios.get(`http://localhost:3001/facultyFind/${theUser}`).then(
        (response) => {
          const id = response.data;
          console.log(id);
          if (id !== "NOUSER") {
            Axios.get(`http://localhost:3001/facultyIsNewUser/${theUser}`).then(
              (response) => {
                if (!response.data) {
                  setEmployeeId(id);
                  setToRender(true);
                } else {
                  navigate("../../faculty/new-user/change-password");
                }
              }
            );
          } else {
            navigate("../../faculty/login");
            sessionStorage.removeItem("user");
          }
        }
      );
    } else {
      navigate("../../faculty/login");
      sessionStorage.removeItem("user");
    }
  }, []);

  return (
    <>
      {toRender && (
        <div className="user-home-main sb-nav-fixed">
          <TopNav />
          <div id="layoutSidenav">
            <SideNav employeeId={employeeId} />
            {/* CONTAINer */}
            <div id="layoutSidenav_content">
              <Routes>
                <Route
                  path=""
                  element={<UserHome employeeId={employeeId} />}
                  exact
                />
                <Route
                  path="profile"
                  element={<UserHome employeeId={employeeId} />}
                />
                <Route
                  path="contact"
                  element={<UserContact employeeId={employeeId} />}
                />
                <Route
                  path="address"
                  element={<UserAddress employeeId={employeeId} />}
                />
                <Route
                  path="issued-id"
                  element={<UserIssuedId employeeId={employeeId} />}
                />
                {/* <Route path="issued-id"></Route> */}
                <Route
                  path="elementary"
                  element={<UserElementary employeeId={employeeId} />}
                />
                <Route
                  path="junior-high"
                  element={<UserJuniorHigh employeeId={employeeId} />}
                />
                <Route
                  path="senior-high"
                  element={<UserSeniorHigh employeeId={employeeId} />}
                />
                <Route
                  path="vocational"
                  element={<UserVocational employeeId={employeeId} />}
                />
                <Route
                  path="college"
                  element={<UserCollege employeeId={employeeId} />}
                />
                <Route
                  path="graduate-studies"
                  element={<UserGraduateStudies employeeId={employeeId} />}
                />

                <Route
                  path="graduate-studies"
                  element={<UserGraduateStudies employeeId={employeeId} />}
                />
                <Route
                  path="graduate-studies"
                  element={<UserGraduateStudies employeeId={employeeId} />}
                />

                <Route
                  path="civil-services"
                  element={<UserCivilServices employeeId={employeeId} />}
                />
                <Route
                  path="work-experiences"
                  element={<UserWorkExp employeeId={employeeId} />}
                />
                <Route
                  path="certificates"
                  element={<UserCertificates employeeId={employeeId} />}
                />
                <Route
                  path="change-password"
                  element={<UserChangePassword employeeId={employeeId} />}
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
      )}
    </>
  );
}

export default UserMain;
