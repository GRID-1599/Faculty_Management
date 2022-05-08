import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import SideNav from "./admin-side-nav";
import TopNav from "./admin-top-nav";

import AdminFaculties from "./admin-home";
import AdminToApproveFaculties from "./admin-to_approve_faculties";

import Axios from "axios";

function AdminMain(params) {
  const [listFaculty, setListFaculty] = useState([]);
  const [objFaculty, setObjFaculty] = useState();
  const employeeId = "2018107999";

  useEffect(() => {
    Axios.get(`http://localhost:3001/getFacultyById/${employeeId}`, {}).then(
      (response) => {
        setObjFaculty(response.data);
      }
    );
  }, []);

  return (
    <div className="admin-home-main sb-nav-fixed">
      <TopNav />
      <div id="layoutSidenav">
        <SideNav />
        {/* CONTAINer */}
        <div id="layoutSidenav_content">
          <Routes>
            <Route path="" element={<AdminFaculties />} />
            <Route path="faculties" element={<AdminFaculties />} />
            <Route
              path="to-approve-faculties"
              element={<AdminToApproveFaculties />}
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

export default AdminMain;
