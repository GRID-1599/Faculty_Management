import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import AdminsList from "./admin-admins-list";
import AdminsRegister from "./admin-admin-register";

const AdminsMain = (props) => {
  return (
    <main>
      <div className="container-xxl px-4 float-start ">
        <h1 className="mt-4">Admin</h1>
        <Routes>
          <Route path="" element={<AdminsList />} />
          <Route path="/register" element={<AdminsRegister />} />
        </Routes>
      </div>
    </main>
  );
};

export default AdminsMain;
