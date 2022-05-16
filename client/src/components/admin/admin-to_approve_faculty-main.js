import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import ApprovalView from "./admin-to_approve_faculty-view";
import ApprovalList from "./admin-to_approve_faculty-list";

const ToApproveFacultyMain = (props) => {
  return (
    <main>
      <div className="container-xxl px-4 float-start ">
        <h1 className="mt-4">Pending for Approval </h1>

        <Routes>
          <Route path="" element={<ApprovalList />} />
          <Route path="/:employeeId" element={<ApprovalView />} />
        </Routes>
      </div>
    </main>
  );
};

export default ToApproveFacultyMain;
