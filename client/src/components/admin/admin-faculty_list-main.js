import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import FacultyView from "./admin-faculty_list-view";
import FacultyList from "./admin-faculty_list-list";

const FacultyMain = (props) => {
  return (
    <main>
      <div className="container-xxl px-4 float-start ">
        <h1 className="mt-4">Faculty</h1>

        <Routes>
          <Route path="" element={<FacultyList />} />
          <Route path="/:employeeId" element={<FacultyView />} />
        </Routes>
      </div>
    </main>
  );
};

export default FacultyMain;
