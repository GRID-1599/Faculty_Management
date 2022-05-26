import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import FacultyView from "./admin-faculty_list-view";
import FacultyList from "./admin-faculty_list-list";
import FacultyExport from "./admin-faculty_list-export";

const FacultyMain = (props) => {
  const adminUsername = props.admin;
  return (
    <main>
      <div className="container-xxl px-4 float-start ">
        <h1 className="mt-4">Faculty</h1>

        <Routes>
          <Route path="" element={<FacultyList admin={adminUsername} />} />
          <Route
            path="/export-data/:employeeId"
            element={<FacultyExport admin={adminUsername} />}
          />
          <Route
            path="/:employeeId"
            element={<FacultyView admin={adminUsername} />}
          />
        </Routes>
      </div>
    </main>
  );
};

export default FacultyMain;
