import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import ContentAdd from "./admin-content-add";
import ContentList from "./admin-content-list";

const ContentMain = (props) => {
  return (
    <main>
      <div className="container-xxl px-4 float-start ">
        <h1 className="mt-4">Content</h1>
        <Routes>
          <Route path="" element={<ContentList />} />
          <Route path="/add" element={<ContentAdd />} />
        </Routes>
      </div>
    </main>
  );
};

export default ContentMain;
