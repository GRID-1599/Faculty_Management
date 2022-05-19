import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import SideNav from "./admin-side-nav";
import TopNav from "./admin-top-nav";

import AdminFaculties from "./admin-faculty_list-main";
import AdminToApproveFaculties from "./admin-to_approve_faculty-main";
import Admins from "./admin-admins-main";

import Axios from "axios";

function AdminMain(params) {
  const navigate = useNavigate();

  // const [listFaculty, setListFaculty] = useState([]);
  // const [objFaculty, setObjFaculty] = useState();
  // var employeeId = "123456";
  const [adminUsername, setAdminUsername] = useState("");
  const [toRender, setToRender] = useState(false);

  useEffect(() => {
    var theAdmin = sessionStorage.getItem("admin");
    // console.log(theAdmin);
    if (theAdmin !== null) {
      Axios.get(`http://localhost:3001/admin/find/${theAdmin}`).then(
        (response) => {
          const id = response.data;
          console.log(id);
          if (id !== "NOUSER") {
            setAdminUsername(id);
            setToRender(true);
          } else {
            navigate("../../admin/login");
            sessionStorage.removeItem("admin");
          }
        }
      );
    } else {
      navigate("../../admin/login");
      sessionStorage.removeItem("admin");
    }
  }, []);

  return (
    <>
      {toRender && (
        <div className="admin-home-main sb-nav-fixed">
          <TopNav />
          <div id="layoutSidenav">
            <SideNav />
            {/* CONTAINer */}
            <div id="layoutSidenav_content">
              <Routes>
                <Route
                  path=""
                  element={<AdminFaculties admin={adminUsername} />}
                />
                <Route
                  path="faculty-list/*"
                  element={<AdminFaculties admin={adminUsername} />}
                />
                <Route
                  path="pending-approval-list/*"
                  element={<AdminToApproveFaculties admin={adminUsername} />}
                />
                <Route
                  path="admin-list/*"
                  element={<Admins admin={adminUsername} />}
                />
              </Routes>
              {/* <footer className="py-4 bg-light mt-auto">
            <div className="container-fluid px-4">
              <div className="d-flex align-items-center justify-content-between small">
                <div className="text-muted">Sample Footer</div>
              </div>
            </div>
          </footer> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AdminMain;
